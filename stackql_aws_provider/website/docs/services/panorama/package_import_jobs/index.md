--- 
title: package_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - package_import_jobs
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

Creates, updates, deletes, gets or lists a <code>package_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.package_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_package_import_job"
    values={[
        { label: 'describe_package_import_job', value: 'describe_package_import_job' },
        { label: 'list_package_import_jobs', value: 'list_package_import_jobs' }
    ]}
>
<TabItem value="describe_package_import_job">

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
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>The job's client token. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="input_config" /></td>
    <td><code>object</code></td>
    <td>A configuration for a package import job.</td>
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
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The job's type. (NODE_PACKAGE_VERSION, MARKETPLACE_NODE_PACKAGE_VERSION)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the job was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td>The job's output.</td>
</tr>
<tr>
    <td><CopyableCode code="output_config" /></td>
    <td><code>object</code></td>
    <td>An output configuration for a package import job.</td>
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
</tbody>
</table>
</TabItem>
<TabItem value="list_package_import_jobs">

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
    <td><CopyableCode code="package_import_jobs" /></td>
    <td><code>array</code></td>
    <td>A list of package import jobs.</td>
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
    <td><a href="#describe_package_import_job"><CopyableCode code="describe_package_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a package import job.</td>
</tr>
<tr>
    <td><a href="#list_package_import_jobs"><CopyableCode code="list_package_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of package import jobs.</td>
</tr>
<tr>
    <td><a href="#create_package_import_job"><CopyableCode code="create_package_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-InputConfig"><code>InputConfig</code></a>, <a href="#parameter-JobType"><code>JobType</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a></td>
    <td></td>
    <td>Imports a node package.</td>
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
    <td>The maximum number of package import jobs to return in one page of results.</td>
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
    defaultValue="describe_package_import_job"
    values={[
        { label: 'describe_package_import_job', value: 'describe_package_import_job' },
        { label: 'list_package_import_jobs', value: 'list_package_import_jobs' }
    ]}
>
<TabItem value="describe_package_import_job">

Returns information about a package import job.

```sql
SELECT
client_token,
created_time,
input_config,
job_id,
job_tags,
job_type,
last_updated_time,
output,
output_config,
status,
status_message
FROM aws.panorama.package_import_jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_package_import_jobs">

Returns a list of package import jobs.

```sql
SELECT
next_token,
package_import_jobs
FROM aws.panorama.package_import_jobs
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_package_import_job"
    values={[
        { label: 'create_package_import_job', value: 'create_package_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_package_import_job">

Imports a node package.

```sql
INSERT INTO aws.panorama.package_import_jobs (
ClientToken,
InputConfig,
JobTags,
JobType,
OutputConfig,
region
)
SELECT 
'{{ ClientToken }}' /* required */,
'{{ InputConfig }}' /* required */,
'{{ JobTags }}',
'{{ JobType }}' /* required */,
'{{ OutputConfig }}' /* required */,
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: package_import_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the package_import_jobs resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: InputConfig
      description: |
        A configuration for a package import job.
      value:
        PackageVersionInputConfig:
          S3Location:
            BucketName: "{{ BucketName }}"
            ObjectKey: "{{ ObjectKey }}"
            Region: "{{ Region }}"
    - name: JobTags
      value:
        - ResourceType: "{{ ResourceType }}"
          Tags: "{{ Tags }}"
    - name: JobType
      value: "{{ JobType }}"
      valid_values: ['NODE_PACKAGE_VERSION', 'MARKETPLACE_NODE_PACKAGE_VERSION']
    - name: OutputConfig
      description: |
        An output configuration for a package import job.
      value:
        PackageVersionOutputConfig:
          MarkLatest: {{ MarkLatest }}
          PackageName: "{{ PackageName }}"
          PackageVersion: "{{ PackageVersion }}"
`}</CodeBlock>

</TabItem>
</Tabs>
