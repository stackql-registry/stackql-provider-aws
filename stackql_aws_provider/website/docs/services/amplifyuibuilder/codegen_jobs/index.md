--- 
title: codegen_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - codegen_jobs
  - amplifyuibuilder
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

Creates, updates, deletes, gets or lists a <code>codegen_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="codegen_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifyuibuilder.codegen_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_codegen_job"
    values={[
        { label: 'get_codegen_job', value: 'get_codegen_job' },
        { label: 'list_codegen_jobs', value: 'list_codegen_jobs' }
    ]}
>
<TabItem value="get_codegen_job">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amplify app associated with the code generation job. (pattern: &lt;code&gt;d&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset" /></td>
    <td><code>object</code></td>
    <td>The CodegenJobAsset to use for the code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_generate_forms" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to autogenerate forms in the code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the code generation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dependencies" /></td>
    <td><code>array</code></td>
    <td>Lists the dependency packages that may be required for the project code to run.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment associated with the code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td>Describes the feature flags that you can specify for a code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="generic_data_schema" /></td>
    <td><code>object</code></td>
    <td>Describes the data schema for a code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the code generation job was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="render_config" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration information for rendering the UI component associated with the code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the code generation job. (in_progress, failed, succeeded)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The customized status message for the code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>One or more key-value pairs to use when tagging the code generation job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_codegen_jobs">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the code generation job summary.</td>
</tr>
<tr>
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amplify app associated with the code generation job. (pattern: &lt;code&gt;d&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the code generation job summary was created.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment associated with the code generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the code generation job summary was modified.</td>
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
    <td><a href="#get_codegen_job"><CopyableCode code="get_codegen_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an existing code generation job.</td>
</tr>
<tr>
    <td><a href="#list_codegen_jobs"><CopyableCode code="list_codegen_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of code generation jobs for a specified Amplify app and backend environment.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the Amplify app.</td>
</tr>
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is a part of the Amplify app.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the code generation job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of jobs to retrieve.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_codegen_job"
    values={[
        { label: 'get_codegen_job', value: 'get_codegen_job' },
        { label: 'list_codegen_jobs', value: 'list_codegen_jobs' }
    ]}
>
<TabItem value="get_codegen_job">

Returns an existing code generation job.

```sql
SELECT
id,
app_id,
asset,
auto_generate_forms,
created_at,
dependencies,
environment_name,
features,
generic_data_schema,
modified_at,
render_config,
status,
status_message,
tags
FROM aws.amplifyuibuilder.codegen_jobs
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_codegen_jobs">

Retrieves a list of code generation jobs for a specified Amplify app and backend environment.

```sql
SELECT
id,
app_id,
created_at,
environment_name,
modified_at
FROM aws.amplifyuibuilder.codegen_jobs
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
