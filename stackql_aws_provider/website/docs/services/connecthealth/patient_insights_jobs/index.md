--- 
title: patient_insights_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - patient_insights_jobs
  - connecthealth
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

Creates, updates, deletes, gets or lists a <code>patient_insights_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="patient_insights_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connecthealth.patient_insights_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_patient_insights_job"
    values={[
        { label: 'get_patient_insights_job', value: 'get_patient_insights_job' }
    ]}
>
<TabItem value="get_patient_insights_job">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the patient insights job was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="encounter_context" /></td>
    <td><code>object</code></td>
    <td>Details for an encounter</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>Configuration details for input patient data</td>
</tr>
<tr>
    <td><CopyableCode code="insights_context" /></td>
    <td><code>object</code></td>
    <td>Details for insights that user wants to generate</td>
</tr>
<tr>
    <td><CopyableCode code="insights_output" /></td>
    <td><code>object</code></td>
    <td>Output of patient insights job</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:health-agent:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:domain/&#91;-a-zA-Z0-9-&#93;+/patient-insights-job/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td> (SUBMITTED, IN_PROGRESS, FAILED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>Configuration details for insights output.</td>
</tr>
<tr>
    <td><CopyableCode code="patient_context" /></td>
    <td><code>object</code></td>
    <td>Details for a patient</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>string</code></td>
    <td>Contains information about the status of a job. (pattern: &lt;code&gt;.*&#91;\s\S&#93;*\S&#91;\s\S&#93;*.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the patient insights job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_context" /></td>
    <td><code>object</code></td>
    <td>Details for user initiating insights job</td>
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
    <td><a href="#get_patient_insights_job"><CopyableCode code="get_patient_insights_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details of a started patient insights job.</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_patient_insights_job"
    values={[
        { label: 'get_patient_insights_job', value: 'get_patient_insights_job' }
    ]}
>
<TabItem value="get_patient_insights_job">

Get details of a started patient insights job.

```sql
SELECT
creation_time,
encounter_context,
input_data_config,
insights_context,
insights_output,
job_arn,
job_id,
job_status,
output_data_config,
patient_context,
status_details,
updated_time,
user_context
FROM aws.connecthealth.patient_insights_jobs
WHERE domain_id = '{{ domain_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
