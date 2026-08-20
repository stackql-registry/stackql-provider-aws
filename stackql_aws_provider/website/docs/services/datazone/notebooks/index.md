--- 
title: notebooks
hide_title: false
hide_table_of_contents: false
keywords:
  - notebooks
  - datazone
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

Creates, updates, deletes, gets or lists a <code>notebooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.notebooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_notebooks"
    values={[
        { label: 'list_notebooks', value: 'list_notebooks' },
        { label: 'get_notebook', value: 'get_notebook' }
    ]}
>
<TabItem value="list_notebooks">

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
    <td>The identifier of the notebook. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon SageMaker Unified Studio domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owning_project_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project that owns the notebook. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a notebook in Amazon SageMaker Unified Studio. (ACTIVE, ARCHIVED, SYNC_IN_PROGRESS, SYNC_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who last updated the notebook.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_notebook">

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
    <td>The identifier of the notebook. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="cell_order" /></td>
    <td><code>array</code></td>
    <td>The ordered list of cells in the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the compute associated with the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon SageMaker Unified Studio domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_configuration" /></td>
    <td><code>object</code></td>
    <td>The environment configuration of the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error details if the notebook is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="git_metadata" /></td>
    <td><code>object</code></td>
    <td>The Git metadata associated with the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="lock_expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook lock expires.</td>
</tr>
<tr>
    <td><CopyableCode code="locked_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook was locked.</td>
</tr>
<tr>
    <td><CopyableCode code="locked_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who locked the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="owning_project_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project that owns the notebook. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The sensitive parameters of the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a notebook in Amazon SageMaker Unified Studio. (ACTIVE, ARCHIVED, SYNC_IN_PROGRESS, SYNC_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who last updated the notebook.</td>
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
    <td><a href="#list_notebooks"><CopyableCode code="list_notebooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists notebooks in Amazon SageMaker Unified Studio.</td>
</tr>
<tr>
    <td><a href="#get_notebook"><CopyableCode code="get_notebook" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a notebook in Amazon SageMaker Unified Studio.</td>
</tr>
<tr>
    <td><a href="#create_notebook"><CopyableCode code="create_notebook" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a notebook in Amazon SageMaker Unified Studio. A notebook is a collaborative document within a project that contains code cells for interactive computing.</td>
</tr>
<tr>
    <td><a href="#update_notebook"><CopyableCode code="update_notebook" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a notebook in Amazon SageMaker Unified Studio.</td>
</tr>
<tr>
    <td><a href="#delete_notebook"><CopyableCode code="delete_notebook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a notebook in Amazon SageMaker Unified Studio.</td>
</tr>
<tr>
    <td><a href="#start_notebook_run"><CopyableCode code="start_notebook_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a>, <a href="#parameter-notebookIdentifier"><code>notebookIdentifier</code></a></td>
    <td></td>
    <td>Starts a notebook run in Amazon SageMaker Unified Studio. A notebook run represents the execution of an Amazon SageMaker notebook within a project. You can configure compute, network, timeout, and environment settings for the run.</td>
</tr>
<tr>
    <td><a href="#start_notebook_export"><CopyableCode code="start_notebook_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notebookIdentifier"><code>notebookIdentifier</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a>, <a href="#parameter-fileFormat"><code>fileFormat</code></a></td>
    <td></td>
    <td>Starts a notebook export in Amazon SageMaker Unified Studio. This operation exports a notebook to a specified file format and stores the output in Amazon Simple Storage Service.</td>
</tr>
<tr>
    <td><a href="#start_notebook_import"><CopyableCode code="start_notebook_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a>, <a href="#parameter-sourceLocation"><code>sourceLocation</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Starts a notebook import in Amazon SageMaker Unified Studio. This operation imports a notebook from an Amazon Simple Storage Service location into a project.</td>
</tr>
<tr>
    <td><a href="#start_notebook_sync"><CopyableCode code="start_notebook_sync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a>, <a href="#parameter-sourceLocation"><code>sourceLocation</code></a></td>
    <td></td>
    <td>Starts a notebook sync in Amazon SageMaker Unified Studio. This operation syncs a notebook from a Git repository into a project.</td>
</tr>
<tr>
    <td><a href="#stop_notebook_run"><CopyableCode code="stop_notebook_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a running notebook run in Amazon SageMaker Unified Studio.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon SageMaker Unified Studio domain in which the notebook run is stopped.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the notebook run to stop.</td>
</tr>
<tr id="parameter-owningProjectIdentifier">
    <td><CopyableCode code="owningProjectIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project that owns the notebooks.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of notebooks to return in a single call. When the number of notebooks exceeds the value of MaxResults, the response contains a NextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of notebooks is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of notebooks, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListNotebooks to list the next set of notebooks.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort the results by.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order for the results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status to filter notebooks by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_notebooks"
    values={[
        { label: 'list_notebooks', value: 'list_notebooks' },
        { label: 'get_notebook', value: 'get_notebook' }
    ]}
>
<TabItem value="list_notebooks">

Lists notebooks in Amazon SageMaker Unified Studio.

```sql
SELECT
id,
name,
created_at,
created_by,
description,
domain_id,
owning_project_id,
status,
updated_at,
updated_by
FROM aws.datazone.notebooks
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND owningProjectIdentifier = '{{ owningProjectIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="get_notebook">

Gets the details of a notebook in Amazon SageMaker Unified Studio.

```sql
SELECT
id,
name,
cell_order,
compute_id,
created_at,
created_by,
description,
domain_id,
environment_configuration,
error,
git_metadata,
lock_expires_at,
locked_at,
locked_by,
metadata,
owning_project_id,
parameters,
status,
updated_at,
updated_by
FROM aws.datazone.notebooks
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notebook"
    values={[
        { label: 'create_notebook', value: 'create_notebook' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notebook">

Creates a notebook in Amazon SageMaker Unified Studio. A notebook is a collaborative document within a project that contains code cells for interactive computing.

```sql
INSERT INTO aws.datazone.notebooks (
owningProjectIdentifier,
name,
description,
metadata,
parameters,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ owningProjectIdentifier }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ metadata }}',
'{{ parameters }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
cell_order,
compute_id,
created_at,
created_by,
description,
domain_id,
environment_configuration,
error,
git_metadata,
lock_expires_at,
locked_at,
locked_by,
metadata,
owning_project_id,
parameters,
status,
updated_at,
updated_by
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notebooks
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the notebooks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notebooks resource.
    - name: owningProjectIdentifier
      value: "{{ owningProjectIdentifier }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: metadata
      value: "{{ metadata }}"
    - name: parameters
      value: "{{ parameters }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notebook"
    values={[
        { label: 'update_notebook', value: 'update_notebook' }
    ]}
>
<TabItem value="update_notebook">

Updates a notebook in Amazon SageMaker Unified Studio.

```sql
UPDATE aws.datazone.notebooks
SET 
description = '{{ description }}',
status = '{{ status }}',
name = '{{ name }}',
cellOrder = '{{ cellOrder }}',
metadata = '{{ metadata }}',
parameters = '{{ parameters }}',
environmentConfiguration = '{{ environmentConfiguration }}',
clientToken = '{{ clientToken }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
cell_order,
compute_id,
created_at,
created_by,
description,
domain_id,
environment_configuration,
error,
git_metadata,
lock_expires_at,
locked_at,
locked_by,
metadata,
owning_project_id,
parameters,
status,
updated_at,
updated_by;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notebook"
    values={[
        { label: 'delete_notebook', value: 'delete_notebook' }
    ]}
>
<TabItem value="delete_notebook">

Deletes a notebook in Amazon SageMaker Unified Studio.

```sql
DELETE FROM aws.datazone.notebooks
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_notebook_run"
    values={[
        { label: 'start_notebook_run', value: 'start_notebook_run' },
        { label: 'start_notebook_export', value: 'start_notebook_export' },
        { label: 'start_notebook_import', value: 'start_notebook_import' },
        { label: 'start_notebook_sync', value: 'start_notebook_sync' },
        { label: 'stop_notebook_run', value: 'stop_notebook_run' }
    ]}
>
<TabItem value="start_notebook_run">

Starts a notebook run in Amazon SageMaker Unified Studio. A notebook run represents the execution of an Amazon SageMaker notebook within a project. You can configure compute, network, timeout, and environment settings for the run.

```sql
EXEC aws.datazone.notebooks.start_notebook_run 
@domain_identifier='{{ domain_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"owningProjectIdentifier": "{{ owningProjectIdentifier }}", 
"notebookIdentifier": "{{ notebookIdentifier }}", 
"scheduleIdentifier": "{{ scheduleIdentifier }}", 
"computeConfiguration": "{{ computeConfiguration }}", 
"networkConfiguration": "{{ networkConfiguration }}", 
"timeoutConfiguration": "{{ timeoutConfiguration }}", 
"triggerSource": "{{ triggerSource }}", 
"metadata": "{{ metadata }}", 
"parameters": "{{ parameters }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_notebook_export">

Starts a notebook export in Amazon SageMaker Unified Studio. This operation exports a notebook to a specified file format and stores the output in Amazon Simple Storage Service.

```sql
EXEC aws.datazone.notebooks.start_notebook_export 
@domain_identifier='{{ domain_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"notebookIdentifier": "{{ notebookIdentifier }}", 
"owningProjectIdentifier": "{{ owningProjectIdentifier }}", 
"fileFormat": "{{ fileFormat }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_notebook_import">

Starts a notebook import in Amazon SageMaker Unified Studio. This operation imports a notebook from an Amazon Simple Storage Service location into a project.

```sql
EXEC aws.datazone.notebooks.start_notebook_import 
@domain_identifier='{{ domain_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"owningProjectIdentifier": "{{ owningProjectIdentifier }}", 
"sourceLocation": "{{ sourceLocation }}", 
"name": "{{ name }}", 
"description": "{{ description }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_notebook_sync">

Starts a notebook sync in Amazon SageMaker Unified Studio. This operation syncs a notebook from a Git repository into a project.

```sql
EXEC aws.datazone.notebooks.start_notebook_sync 
@domain_identifier='{{ domain_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"owningProjectIdentifier": "{{ owningProjectIdentifier }}", 
"sourceLocation": "{{ sourceLocation }}", 
"gitMetadata": "{{ gitMetadata }}", 
"notebookId": "{{ notebookId }}", 
"name": "{{ name }}", 
"description": "{{ description }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="stop_notebook_run">

Stops a running notebook run in Amazon SageMaker Unified Studio.

```sql
EXEC aws.datazone.notebooks.stop_notebook_run 
@domain_identifier='{{ domain_identifier }}' --required, 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
