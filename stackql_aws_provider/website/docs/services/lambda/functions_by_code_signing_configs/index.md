--- 
title: functions_by_code_signing_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - functions_by_code_signing_configs
  - lambda
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

Creates, updates, deletes, gets or lists a <code>functions_by_code_signing_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="functions_by_code_signing_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.functions_by_code_signing_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_functions_by_code_signing_config"
    values={[
        { label: 'list_functions_by_code_signing_config', value: 'list_functions_by_code_signing_config' }
    ]}
>
<TabItem value="list_functions_by_code_signing_config">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The function ARNs.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

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
    <td><a href="#list_functions_by_code_signing_config"><CopyableCode code="list_functions_by_code_signing_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-code_signing_config_arn"><code>code_signing_config_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.</td>
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
<tr id="parameter-code_signing_config_arn">
    <td><CopyableCode code="code_signing_config_arn" /></td>
    <td><code>string</code></td>
    <td>The The Amazon Resource Name (ARN) of the code signing configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of items to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_functions_by_code_signing_config"
    values={[
        { label: 'list_functions_by_code_signing_config', value: 'list_functions_by_code_signing_config' }
    ]}
>
<TabItem value="list_functions_by_code_signing_config">

List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.

```sql
SELECT
function_arn
FROM aws.lambda.functions_by_code_signing_configs
WHERE code_signing_config_arn = '{{ code_signing_config_arn }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
