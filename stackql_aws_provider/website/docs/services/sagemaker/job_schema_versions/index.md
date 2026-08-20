--- 
title: job_schema_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - job_schema_versions
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>job_schema_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_schema_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.job_schema_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_job_schema_versions"
    values={[
        { label: 'list_job_schema_versions', value: 'list_job_schema_versions' }
    ]}
>
<TabItem value="list_job_schema_versions">

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
    <td><CopyableCode code="job_config_schema_version" /></td>
    <td><code>string</code></td>
    <td>The version of the job configuration schema. (pattern: &lt;code&gt;\d+\.\d+\.\d+&lt;/code&gt;)</td>
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
    <td><a href="#list_job_schema_versions"><CopyableCode code="list_job_schema_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists available configuration schema versions for a specified job category. Use the schema versions with DescribeJobSchemaVersion to retrieve the full schema document. The following operations are related to ListJobSchemaVersions: DescribeJobSchemaVersion CreateJob</td>
</tr>
<tr>
    <td><a href="#describe_job_schema_version"><CopyableCode code="describe_job_schema_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobCategory"><code>JobCategory</code></a></td>
    <td></td>
    <td>Returns the JSON schema for a specified job category and schema version. Use this schema to validate your JobConfigDocument before calling CreateJob. If you don't specify a schema version, the latest version is returned. The schema defines required fields, allowed values, and constraints for the job configuration. The following operations are related to DescribeJobSchemaVersion: ListJobSchemaVersions CreateJob</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_job_schema_versions"
    values={[
        { label: 'list_job_schema_versions', value: 'list_job_schema_versions' }
    ]}
>
<TabItem value="list_job_schema_versions">

Lists available configuration schema versions for a specified job category. Use the schema versions with DescribeJobSchemaVersion to retrieve the full schema document. The following operations are related to ListJobSchemaVersions: DescribeJobSchemaVersion CreateJob

```sql
SELECT
job_config_schema_version
FROM aws.sagemaker.job_schema_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="describe_job_schema_version"
    values={[
        { label: 'describe_job_schema_version', value: 'describe_job_schema_version' }
    ]}
>
<TabItem value="describe_job_schema_version">

Returns the JSON schema for a specified job category and schema version. Use this schema to validate your JobConfigDocument before calling CreateJob. If you don't specify a schema version, the latest version is returned. The schema defines required fields, allowed values, and constraints for the job configuration. The following operations are related to DescribeJobSchemaVersion: ListJobSchemaVersions CreateJob

```sql
EXEC aws.sagemaker.job_schema_versions.describe_job_schema_version 
@region='{{ region }}' --required 
@@json=
'{
"JobCategory": "{{ JobCategory }}", 
"JobConfigSchemaVersion": "{{ JobConfigSchemaVersion }}"
}'
;
```
</TabItem>
</Tabs>
