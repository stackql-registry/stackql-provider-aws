--- 
title: functions
hide_title: false
hide_table_of_contents: false
keywords:
  - functions
  - appsync
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

Creates, updates, deletes, gets or lists a <code>functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function"
    values={[
        { label: 'get_function', value: 'get_function' },
        { label: 'list_functions', value: 'list_functions' }
    ]}
>
<TabItem value="get_function">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Function object. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_name" /></td>
    <td><code>string</code></td>
    <td>The name of the DataSource. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The Function description.</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Function object.</td>
</tr>
<tr>
    <td><CopyableCode code="function_id" /></td>
    <td><code>string</code></td>
    <td>A unique ID representing the Function object.</td>
</tr>
<tr>
    <td><CopyableCode code="function_version" /></td>
    <td><code>string</code></td>
    <td>The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="max_batch_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum batching size for a resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="request_mapping_template" /></td>
    <td><code>string</code></td>
    <td>The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="response_mapping_template" /></td>
    <td><code>string</code></td>
    <td>The Function response mapping template. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>object</code></td>
    <td>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_config" /></td>
    <td><code>object</code></td>
    <td>Describes a Sync configuration for a resolver. Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_functions">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Function object. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_name" /></td>
    <td><code>string</code></td>
    <td>The name of the DataSource. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The Function description.</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Function object.</td>
</tr>
<tr>
    <td><CopyableCode code="function_id" /></td>
    <td><code>string</code></td>
    <td>A unique ID representing the Function object.</td>
</tr>
<tr>
    <td><CopyableCode code="function_version" /></td>
    <td><code>string</code></td>
    <td>The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="max_batch_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum batching size for a resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="request_mapping_template" /></td>
    <td><code>string</code></td>
    <td>The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="response_mapping_template" /></td>
    <td><code>string</code></td>
    <td>The Function response mapping template. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>object</code></td>
    <td>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_config" /></td>
    <td><code>object</code></td>
    <td>Describes a Sync configuration for a resolver. Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</td>
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
    <td><a href="#get_function"><CopyableCode code="get_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-function_id"><code>function_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a Function.</td>
</tr>
<tr>
    <td><a href="#list_functions"><CopyableCode code="list_functions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List multiple functions.</td>
</tr>
<tr>
    <td><a href="#create_function"><CopyableCode code="create_function" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dataSourceName"><code>dataSourceName</code></a></td>
    <td></td>
    <td>Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the resolver logic.</td>
</tr>
<tr>
    <td><a href="#update_function"><CopyableCode code="update_function" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-function_id"><code>function_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dataSourceName"><code>dataSourceName</code></a></td>
    <td></td>
    <td>Updates a Function object.</td>
</tr>
<tr>
    <td><a href="#delete_function"><CopyableCode code="delete_function" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-function_id"><code>function_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Function.</td>
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
<tr id="parameter-api_id">
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The GraphQL API ID.</td>
</tr>
<tr id="parameter-function_id">
    <td><CopyableCode code="function_id" /></td>
    <td><code>string</code></td>
    <td>The Function ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that you want the request to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_function"
    values={[
        { label: 'get_function', value: 'get_function' },
        { label: 'list_functions', value: 'list_functions' }
    ]}
>
<TabItem value="get_function">

Get a Function.

```sql
SELECT
name,
code,
data_source_name,
description,
function_arn,
function_id,
function_version,
max_batch_size,
request_mapping_template,
response_mapping_template,
runtime,
sync_config
FROM aws.appsync.functions
WHERE api_id = '{{ api_id }}' -- required
AND function_id = '{{ function_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_functions">

List multiple functions.

```sql
SELECT
name,
code,
data_source_name,
description,
function_arn,
function_id,
function_version,
max_batch_size,
request_mapping_template,
response_mapping_template,
runtime,
sync_config
FROM aws.appsync.functions
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_function"
    values={[
        { label: 'create_function', value: 'create_function' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_function">

Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the resolver logic.

```sql
INSERT INTO aws.appsync.functions (
name,
description,
dataSourceName,
requestMappingTemplate,
responseMappingTemplate,
functionVersion,
syncConfig,
maxBatchSize,
runtime,
code,
api_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ dataSourceName }}' /* required */,
'{{ requestMappingTemplate }}',
'{{ responseMappingTemplate }}',
'{{ functionVersion }}',
'{{ syncConfig }}',
{{ maxBatchSize }},
'{{ runtime }}',
'{{ code }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
function_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: functions
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the functions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the functions resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: dataSourceName
      value: "{{ dataSourceName }}"
    - name: requestMappingTemplate
      value: "{{ requestMappingTemplate }}"
    - name: responseMappingTemplate
      value: "{{ responseMappingTemplate }}"
    - name: functionVersion
      value: "{{ functionVersion }}"
    - name: syncConfig
      description: |
        Describes a Sync configuration for a resolver. Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
      value:
        conflictHandler: "{{ conflictHandler }}"
        conflictDetection: "{{ conflictDetection }}"
        lambdaConflictHandlerConfig:
          lambdaConflictHandlerArn: "{{ lambdaConflictHandlerArn }}"
    - name: maxBatchSize
      value: {{ maxBatchSize }}
    - name: runtime
      description: |
        Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
      value:
        name: "{{ name }}"
        runtimeVersion: "{{ runtimeVersion }}"
    - name: code
      value: "{{ code }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_function"
    values={[
        { label: 'update_function', value: 'update_function' }
    ]}
>
<TabItem value="update_function">

Updates a Function object.

```sql
UPDATE aws.appsync.functions
SET 
name = '{{ name }}',
description = '{{ description }}',
dataSourceName = '{{ dataSourceName }}',
requestMappingTemplate = '{{ requestMappingTemplate }}',
responseMappingTemplate = '{{ responseMappingTemplate }}',
functionVersion = '{{ functionVersion }}',
syncConfig = '{{ syncConfig }}',
maxBatchSize = {{ maxBatchSize }},
runtime = '{{ runtime }}',
code = '{{ code }}'
WHERE 
api_id = '{{ api_id }}' --required
AND function_id = '{{ function_id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND dataSourceName = '{{ dataSourceName }}' --required
RETURNING
function_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_function"
    values={[
        { label: 'delete_function', value: 'delete_function' }
    ]}
>
<TabItem value="delete_function">

Deletes a Function.

```sql
DELETE FROM aws.appsync.functions
WHERE api_id = '{{ api_id }}' --required
AND function_id = '{{ function_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
