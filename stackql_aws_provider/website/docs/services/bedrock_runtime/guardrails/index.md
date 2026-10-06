--- 
title: guardrails
hide_title: false
hide_table_of_contents: false
keywords:
  - guardrails
  - bedrock_runtime
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>guardrails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="guardrails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_runtime.guardrails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#apply_guardrail"><CopyableCode code="apply_guardrail" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-guardrail_identifier"><code>guardrail_identifier</code></a>, <a href="#parameter-guardrail_version"><code>guardrail_version</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>The action to apply a guardrail. For troubleshooting some of the common errors you might encounter when using the ApplyGuardrail API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-guardrail_identifier">
    <td><CopyableCode code="guardrail_identifier" /></td>
    <td><code>string</code></td>
    <td>The guardrail identifier used in the request to apply the guardrail.</td>
</tr>
<tr id="parameter-guardrail_version">
    <td><CopyableCode code="guardrail_version" /></td>
    <td><code>string</code></td>
    <td>The guardrail version used in the request to apply the guardrail.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="apply_guardrail"
    values={[
        { label: 'apply_guardrail', value: 'apply_guardrail' }
    ]}
>
<TabItem value="apply_guardrail">

The action to apply a guardrail. For troubleshooting some of the common errors you might encounter when using the ApplyGuardrail API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide

```sql
EXEC aws.bedrock_runtime.guardrails.apply_guardrail 
@guardrail_identifier='{{ guardrail_identifier }}' --required, 
@guardrail_version='{{ guardrail_version }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"source": "{{ source }}", 
"content": "{{ content }}", 
"outputScope": "{{ outputScope }}"
}'
;
```
</TabItem>
</Tabs>
