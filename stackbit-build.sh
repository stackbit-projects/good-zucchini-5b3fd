#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/6035b3fdac56b00016ab10e1/webhook/build/pull > /dev/null
curl -s -X POST https://api.stackbit.com/project/6035b3fdac56b00016ab10e1/webhook/build/ssgbuild > /dev/null
gatsby build
curl -s -X POST https://api.stackbit.com/project/6035b3fdac56b00016ab10e1/webhook/build/publish > /dev/null
