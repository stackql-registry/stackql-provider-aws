--- 
title: events_detection_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - events_detection_jobs
  - comprehend
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

Creates, updates, deletes, gets or lists an <code>events_detection_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events_detection_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.events_detection_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_events_detection_job"
    values={[
        { label: 'describe_events_detection_job', value: 'describe_events_detection_job' },
        { label: 'list_events_detection_jobs', value: 'list_events_detection_jobs' }
    ]}
>
<TabItem value="describe_events_detection_job">

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
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the events detection job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>The input data configuration that you supplied when you created the events detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows: arn:<code>&lt;partition&gt;</code>:comprehend:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:events-detection-job/<code>&lt;job-id&gt;</code> The following is an example job ARN: arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*((/dataset/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)|(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier assigned to the events detection job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name you assigned the events detection job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the events detection job. (SUBMITTED, IN_PROGRESS, COMPLETED, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code of the input documents. (en, es, fr, de, it, pt, ar, hi, ja, ko, zh, zh-TW)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the events detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>The output data configuration that you supplied when you created the events detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the events detection job was submitted for processing.</td>
</tr>
<tr>
    <td><CopyableCode code="target_event_types" /></td>
    <td><code>array</code></td>
    <td>The types of events that are detected by the job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_events_detection_jobs">

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
    <td><CopyableCode code="events_detection_job_properties_list" /></td>
    <td><code>array</code></td>
    <td>A list containing the properties of each job that is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return.</td>
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
    <td><a href="#describe_events_detection_job"><CopyableCode code="describe_events_detection_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status and details of an events detection job.</td>
</tr>
<tr>
    <td><a href="#list_events_detection_jobs"><CopyableCode code="list_events_detection_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the events detection jobs that you have submitted.</td>
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
    defaultValue="describe_events_detection_job"
    values={[
        { label: 'describe_events_detection_job', value: 'describe_events_detection_job' },
        { label: 'list_events_detection_jobs', value: 'list_events_detection_jobs' }
    ]}
>
<TabItem value="describe_events_detection_job">

Gets the status and details of an events detection job.

```sql
SELECT
data_access_role_arn,
end_time,
input_data_config,
job_arn,
job_id,
job_name,
job_status,
language_code,
message,
output_data_config,
submit_time,
target_event_types
FROM aws.comprehend.events_detection_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_events_detection_jobs">

Gets a list of the events detection jobs that you have submitted.

```sql
SELECT
events_detection_job_properties_list,
next_token
FROM aws.comprehend.events_detection_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
