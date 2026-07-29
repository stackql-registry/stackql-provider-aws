--- 
title: node_from_template_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - node_from_template_jobs
  - panorama
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

Creates, updates, deletes, gets or lists a <code>node_from_template_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="node_from_template_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.node_from_template_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_node_from_template_job"
    values={[
        { label: 'describe_node_from_template_job', value: 'describe_node_from_template_job' },
        { label: 'list_node_from_template_jobs', value: 'list_node_from_template_jobs' }
    ]}
>
<TabItem value="describe_node_from_template_job">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job's ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_tags" /></td>
    <td><code>array</code></td>
    <td>The job's tags.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the job was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="node_description" /></td>
    <td><code>string</code></td>
    <td>The node's description. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="node_name" /></td>
    <td><code>string</code></td>
    <td>The node's name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_package_name" /></td>
    <td><code>string</code></td>
    <td>The job's output package name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_package_version" /></td>
    <td><code>string</code></td>
    <td>The job's output package version. (pattern: &lt;code&gt;^(&#91;0-9&#93;+)\.(&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The job's status. (PENDING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The job's status message.</td>
</tr>
<tr>
    <td><CopyableCode code="template_parameters" /></td>
    <td><code>object</code></td>
    <td>The job's template parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="template_type" /></td>
    <td><code>string</code></td>
    <td>The job's template type. (RTSP_CAMERA_STREAM)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_node_from_template_jobs">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token that's included if more results are available. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="node_from_template_jobs" /></td>
    <td><code>array</code></td>
    <td>A list of jobs.</td>
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
    <td><a href="#describe_node_from_template_job"><CopyableCode code="describe_node_from_template_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a job to create a camera stream node.</td>
</tr>
<tr>
    <td><a href="#list_node_from_template_jobs"><CopyableCode code="list_node_from_template_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of camera stream node jobs.</td>
</tr>
<tr>
    <td><a href="#create_node_from_template_job"><CopyableCode code="create_node_from_template_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NodeName"><code>NodeName</code></a>, <a href="#parameter-OutputPackageName"><code>OutputPackageName</code></a>, <a href="#parameter-OutputPackageVersion"><code>OutputPackageVersion</code></a>, <a href="#parameter-TemplateParameters"><code>TemplateParameters</code></a>, <a href="#parameter-TemplateType"><code>TemplateType</code></a></td>
    <td></td>
    <td>Creates a camera stream node.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of node from template jobs to return in one page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_node_from_template_job"
    values={[
        { label: 'describe_node_from_template_job', value: 'describe_node_from_template_job' },
        { label: 'list_node_from_template_jobs', value: 'list_node_from_template_jobs' }
    ]}
>
<TabItem value="describe_node_from_template_job">

Returns information about a job to create a camera stream node.

```sql
SELECT
created_time,
job_id,
job_tags,
last_updated_time,
node_description,
node_name,
output_package_name,
output_package_version,
status,
status_message,
template_parameters,
template_type
FROM aws.panorama.node_from_template_jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_node_from_template_jobs">

Returns a list of camera stream node jobs.

```sql
SELECT
next_token,
node_from_template_jobs
FROM aws.panorama.node_from_template_jobs
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_node_from_template_job"
    values={[
        { label: 'create_node_from_template_job', value: 'create_node_from_template_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_node_from_template_job">

Creates a camera stream node.

```sql
INSERT INTO aws.panorama.node_from_template_jobs (
JobTags,
NodeDescription,
NodeName,
OutputPackageName,
OutputPackageVersion,
TemplateParameters,
TemplateType,
region
)
SELECT 
'{{ JobTags }}',
'{{ NodeDescription }}',
'{{ NodeName }}' /* required */,
'{{ OutputPackageName }}' /* required */,
'{{ OutputPackageVersion }}' /* required */,
'{{ TemplateParameters }}' /* required */,
'{{ TemplateType }}' /* required */,
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: node_from_template_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the node_from_template_jobs resource.
    - name: JobTags
      value:
        - ResourceType: "{{ ResourceType }}"
          Tags: "{{ Tags }}"
    - name: NodeDescription
      value: "{{ NodeDescription }}"
    - name: NodeName
      value: "{{ NodeName }}"
    - name: OutputPackageName
      value: "{{ OutputPackageName }}"
    - name: OutputPackageVersion
      value: "{{ OutputPackageVersion }}"
    - name: TemplateParameters
      value: "{{ TemplateParameters }}"
    - name: TemplateType
      value: "{{ TemplateType }}"
      valid_values: ['RTSP_CAMERA_STREAM']
`}</CodeBlock>

</TabItem>
</Tabs>
