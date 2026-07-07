--- 
title: third_party_job_details
hide_title: false
hide_table_of_contents: false
keywords:
  - third_party_job_details
  - codepipeline
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

Creates, updates, deletes, gets or lists a <code>third_party_job_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="third_party_job_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.third_party_job_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_third_party_job_details"
    values={[
        { label: 'get_third_party_job_details', value: 'get_third_party_job_details' }
    ]}
>
<TabItem value="get_third_party_job_details">

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
    <td>The identifier used to identify the job details in CodePipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>The data to be returned by the third party job worker.</td>
</tr>
<tr>
    <td><CopyableCode code="nonce" /></td>
    <td><code>string</code></td>
    <td>A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an AcknowledgeThirdPartyJob request.</td>
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
    <td><a href="#get_third_party_job_details"><CopyableCode code="get_third_party_job_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Requests the details of a job for a third party action. Used for partner actions only. When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</td>
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
    defaultValue="get_third_party_job_details"
    values={[
        { label: 'get_third_party_job_details', value: 'get_third_party_job_details' }
    ]}
>
<TabItem value="get_third_party_job_details">

Requests the details of a job for a third party action. Used for partner actions only. When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.

```sql
SELECT
id,
data,
nonce
FROM aws.codepipeline.third_party_job_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
