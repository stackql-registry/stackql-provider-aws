--- 
title: identity_resolution_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_resolution_jobs
  - customer_profiles
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

Creates, updates, deletes, gets or lists an <code>identity_resolution_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_resolution_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.identity_resolution_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_resolution_job"
    values={[
        { label: 'get_identity_resolution_job', value: 'get_identity_resolution_job' },
        { label: 'list_identity_resolution_jobs', value: 'list_identity_resolution_jobs' }
    ]}
>
<TabItem value="get_identity_resolution_job">

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
    <td><CopyableCode code="auto_merging" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for how to perform the auto-merging of profiles.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exporting_location" /></td>
    <td><code>object</code></td>
    <td>The S3 location where the Identity Resolution Job writes result files.</td>
</tr>
<tr>
    <td><CopyableCode code="job_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Identity Resolution Job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_expiration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Identity Resolution Job will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Identity Resolution Job. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Identity Resolution Job was started or will be started.</td>
</tr>
<tr>
    <td><CopyableCode code="job_stats" /></td>
    <td><code>object</code></td>
    <td>Statistics about the Identity Resolution Job.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Identity Resolution Job was most recently edited.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The error messages that are generated when the Identity Resolution Job runs. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Identity Resolution Job. PENDING: The Identity Resolution Job is scheduled but has not started yet. If you turn off the Identity Resolution feature in your domain, jobs in the PENDING state are deleted. PREPROCESSING: The Identity Resolution Job is loading your data. FIND_MATCHING: The Identity Resolution Job is using the machine learning model to identify profiles that belong to the same matching group. MERGING: The Identity Resolution Job is merging duplicate profiles. COMPLETED: The Identity Resolution Job completed successfully. PARTIAL_SUCCESS: There's a system error and not all of the data is merged. The Identity Resolution Job writes a message indicating the source of the problem. FAILED: The Identity Resolution Job did not merge any data. It writes a message indicating the source of the problem. (PENDING, PREPROCESSING, FIND_MATCHING, MERGING, COMPLETED, PARTIAL_SUCCESS, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_identity_resolution_jobs">

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
    <td><CopyableCode code="identity_resolution_jobs_list" /></td>
    <td><code>array</code></td>
    <td>A list of Identity Resolution Jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
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
    <td><a href="#get_identity_resolution_job"><CopyableCode code="get_identity_resolution_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an Identity Resolution Job in a specific domain. Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see Use Identity Resolution to consolidate similar profiles.</td>
</tr>
<tr>
    <td><a href="#list_identity_resolution_jobs"><CopyableCode code="list_identity_resolution_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by JobStartTime.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Identity Resolution Job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_identity_resolution_job"
    values={[
        { label: 'get_identity_resolution_job', value: 'get_identity_resolution_job' },
        { label: 'list_identity_resolution_jobs', value: 'list_identity_resolution_jobs' }
    ]}
>
<TabItem value="get_identity_resolution_job">

Returns information about an Identity Resolution Job in a specific domain. Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see Use Identity Resolution to consolidate similar profiles.

```sql
SELECT
auto_merging,
domain_name,
exporting_location,
job_end_time,
job_expiration_time,
job_id,
job_start_time,
job_stats,
last_updated_at,
message,
status
FROM aws.customer_profiles.identity_resolution_jobs
WHERE domain_name = '{{ domain_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_identity_resolution_jobs">

Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by JobStartTime.

```sql
SELECT
identity_resolution_jobs_list,
next_token
FROM aws.customer_profiles.identity_resolution_jobs
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>
