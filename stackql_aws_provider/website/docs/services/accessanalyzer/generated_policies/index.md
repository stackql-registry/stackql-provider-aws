--- 
title: generated_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - generated_policies
  - accessanalyzer
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

Creates, updates, deletes, gets or lists a <code>generated_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="generated_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.generated_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_generated_policy"
    values={[
        { label: 'get_generated_policy', value: 'get_generated_policy' }
    ]}
>
<TabItem value="get_generated_policy">

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
    <td><CopyableCode code="generatedPolicyResult" /></td>
    <td><code>object</code></td>
    <td>A GeneratedPolicyResult object that contains the generated policies and associated details.</td>
</tr>
<tr>
    <td><CopyableCode code="jobDetails" /></td>
    <td><code>object</code></td>
    <td>A GeneratedPolicyDetails object that contains details about the generated policy.</td>
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
    <td><a href="#get_generated_policy"><CopyableCode code="get_generated_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeResourcePlaceholders"><code>includeResourcePlaceholders</code></a>, <a href="#parameter-includeServiceLevelTemplate"><code>includeServiceLevelTemplate</code></a></td>
    <td>Retrieves the policy that was generated using StartPolicyGeneration.</td>
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
    <td>The JobId that is returned by the StartPolicyGeneration operation. The JobId can be used with GetGeneratedPolicy to retrieve the generated policies or used with CancelPolicyGeneration to cancel the policy generation request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includeResourcePlaceholders">
    <td><CopyableCode code="includeResourcePlaceholders" /></td>
    <td><code>boolean</code></td>
    <td>The level of detail that you want to generate. You can specify whether to generate policies with placeholders for resource ARNs for actions that support resource level granularity in policies. For example, in the resource section of a policy, you can receive a placeholder such as "Resource":"arn:aws:s3:::$&#123;BucketName&#125;" instead of "*".</td>
</tr>
<tr id="parameter-includeServiceLevelTemplate">
    <td><CopyableCode code="includeServiceLevelTemplate" /></td>
    <td><code>boolean</code></td>
    <td>The level of detail that you want to generate. You can specify whether to generate service-level policies. IAM Access Analyzer uses iam:servicelastaccessed to identify services that have been used recently to create this service-level template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_generated_policy"
    values={[
        { label: 'get_generated_policy', value: 'get_generated_policy' }
    ]}
>
<TabItem value="get_generated_policy">

Retrieves the policy that was generated using StartPolicyGeneration.

```sql
SELECT
generatedPolicyResult,
jobDetails
FROM aws.accessanalyzer.generated_policies
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
AND includeResourcePlaceholders = '{{ includeResourcePlaceholders }}'
AND includeServiceLevelTemplate = '{{ includeServiceLevelTemplate }}'
;
```
</TabItem>
</Tabs>
