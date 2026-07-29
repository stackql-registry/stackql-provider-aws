--- 
title: run_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - run_groups
  - omics
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

Creates, updates, deletes, gets or lists a <code>run_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="run_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.run_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_run_group"
    values={[
        { label: 'get_run_group', value: 'get_run_group' },
        { label: 'list_run_groups', value: 'list_run_groups' }
    ]}
>
<TabItem value="get_run_group">

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
    <td>The group's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The group's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The group's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="max_cpus" /></td>
    <td><code>integer</code></td>
    <td>The group's maximum number of CPUs to use.</td>
</tr>
<tr>
    <td><CopyableCode code="max_duration" /></td>
    <td><code>integer</code></td>
    <td>The group's maximum run time in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="max_gpus" /></td>
    <td><code>integer</code></td>
    <td>The maximum GPUs that can be used by a run group.</td>
</tr>
<tr>
    <td><CopyableCode code="max_runs" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of concurrent runs for the group.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The group's tags.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_run_groups">

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
    <td>The group's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The group's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The group's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="max_cpus" /></td>
    <td><code>integer</code></td>
    <td>The group's maximum CPU count setting.</td>
</tr>
<tr>
    <td><CopyableCode code="max_duration" /></td>
    <td><code>integer</code></td>
    <td>The group's maximum duration setting in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="max_gpus" /></td>
    <td><code>integer</code></td>
    <td>The maximum GPUs that can be used by a run group.</td>
</tr>
<tr>
    <td><CopyableCode code="max_runs" /></td>
    <td><code>integer</code></td>
    <td>The group's maximum concurrent run setting.</td>
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
    <td><a href="#get_run_group"><CopyableCode code="get_run_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a run group and returns its metadata.</td>
</tr>
<tr>
    <td><a href="#list_run_groups"><CopyableCode code="list_run_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of all run groups and returns the metadata for each run group.</td>
</tr>
<tr>
    <td><a href="#create_run_group"><CopyableCode code="create_run_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Creates a run group to limit the compute resources for the runs that are added to the group. Returns an ARN, ID, and tags for the run group.</td>
</tr>
<tr>
    <td><a href="#update_run_group"><CopyableCode code="update_run_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the settings of a run group and returns a response with no body if the operation is successful. You can update the following settings with UpdateRunGroup: Maximum number of CPUs Run time (measured in minutes) Number of GPUs Number of concurrent runs Group name To confirm that the settings have been successfully updated, use the ListRunGroups or GetRunGroup API operations to verify that the desired changes have been made.</td>
</tr>
<tr>
    <td><a href="#delete_run_group"><CopyableCode code="delete_run_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a run group and returns a response with no body if the operation is successful. To verify that the run group is deleted: Use ListRunGroups to confirm the workflow no longer appears in the list. Use GetRunGroup to verify the workflow cannot be found.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The run group's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of run groups to return in one page of results.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The run groups' name.</td>
</tr>
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_run_group"
    values={[
        { label: 'get_run_group', value: 'get_run_group' },
        { label: 'list_run_groups', value: 'list_run_groups' }
    ]}
>
<TabItem value="get_run_group">

Gets information about a run group and returns its metadata.

```sql
SELECT
id,
name,
arn,
creation_time,
max_cpus,
max_duration,
max_gpus,
max_runs,
tags
FROM aws.omics.run_groups
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_run_groups">

Retrieves a list of all run groups and returns the metadata for each run group.

```sql
SELECT
id,
name,
arn,
creation_time,
max_cpus,
max_duration,
max_gpus,
max_runs
FROM aws.omics.run_groups
WHERE region = '{{ region }}' -- required
AND name = '{{ name }}'
AND startingToken = '{{ startingToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_run_group"
    values={[
        { label: 'create_run_group', value: 'create_run_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_run_group">

Creates a run group to limit the compute resources for the runs that are added to the group. Returns an ARN, ID, and tags for the run group.

```sql
INSERT INTO aws.omics.run_groups (
name,
maxCpus,
maxRuns,
maxDuration,
tags,
requestId,
maxGpus,
region
)
SELECT 
'{{ name }}',
{{ maxCpus }},
{{ maxRuns }},
{{ maxDuration }},
'{{ tags }}',
'{{ requestId }}' /* required */,
{{ maxGpus }},
'{{ region }}'
RETURNING
id,
arn,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: run_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the run_groups resource.
    - name: name
      value: "{{ name }}"
    - name: maxCpus
      value: {{ maxCpus }}
    - name: maxRuns
      value: {{ maxRuns }}
    - name: maxDuration
      value: {{ maxDuration }}
    - name: tags
      value: "{{ tags }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: maxGpus
      value: {{ maxGpus }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_run_group"
    values={[
        { label: 'update_run_group', value: 'update_run_group' }
    ]}
>
<TabItem value="update_run_group">

Updates the settings of a run group and returns a response with no body if the operation is successful. You can update the following settings with UpdateRunGroup: Maximum number of CPUs Run time (measured in minutes) Number of GPUs Number of concurrent runs Group name To confirm that the settings have been successfully updated, use the ListRunGroups or GetRunGroup API operations to verify that the desired changes have been made.

```sql
UPDATE aws.omics.run_groups
SET 
name = '{{ name }}',
maxCpus = {{ maxCpus }},
maxRuns = {{ maxRuns }},
maxDuration = {{ maxDuration }},
maxGpus = {{ maxGpus }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_run_group"
    values={[
        { label: 'delete_run_group', value: 'delete_run_group' }
    ]}
>
<TabItem value="delete_run_group">

Deletes a run group and returns a response with no body if the operation is successful. To verify that the run group is deleted: Use ListRunGroups to confirm the workflow no longer appears in the list. Use GetRunGroup to verify the workflow cannot be found.

```sql
DELETE FROM aws.omics.run_groups
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
