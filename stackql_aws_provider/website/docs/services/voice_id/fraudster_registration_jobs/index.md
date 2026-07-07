--- 
title: fraudster_registration_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - fraudster_registration_jobs
  - voice_id
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

Creates, updates, deletes, gets or lists a <code>fraudster_registration_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fraudster_registration_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.voice_id.fraudster_registration_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fraudster_registration_job"
    values={[
        { label: 'describe_fraudster_registration_job', value: 'describe_fraudster_registration_job' },
        { label: 'list_fraudster_registration_jobs', value: 'list_fraudster_registration_jobs' }
    ]}
>
<TabItem value="describe_fraudster_registration_job">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the fraudster registration job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets to read the input manifest file and write the job output file. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DomainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the fraudster registration job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the fraudster registration job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details that are populated when an entire batch job fails. In cases of individual registration job failures, the batch job as a whole doesn't fail; it is completed with a JobStatus of COMPLETED_WITH_ERRORS. You can use the job output file to identify the individual registration requests that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The input data config containing an S3 URI for the input manifest file that contains the list of fraudster registration job requests.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The service-generated identifier for the fraudster registration job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The client-provided name for the fraudster registration job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobProgress" /></td>
    <td><code>object</code></td>
    <td>Shows the completed percentage of registration requests listed in the input file.</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the fraudster registration job. (SUBMITTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The output data config containing the S3 location where you want Voice ID to write your job output file; you must also include a KMS key ID in order to encrypt the file.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationConfig" /></td>
    <td><code>object</code></td>
    <td>The registration config containing details such as the action to take when a duplicate fraudster is detected, and the similarity threshold to use for detecting a duplicate fraudster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fraudster_registration_jobs">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the fraudster registration job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the fraudster registration job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the fraudster registration job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details that are populated when an entire batch job fails. In cases of individual registration job failures, the batch job as a whole doesn't fail; it is completed with a JobStatus of COMPLETED_WITH_ERRORS. You can use the job output file to identify the individual registration requests that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The service-generated identifier for the fraudster registration job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The client-provided name for the fraudster registration job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobProgress" /></td>
    <td><code>object</code></td>
    <td>Shows the completed percentage of registration requests listed in the input file.</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the fraudster registration job. (SUBMITTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
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
    <td><a href="#describe_fraudster_registration_job"><CopyableCode code="describe_fraudster_registration_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified fraudster registration job.</td>
</tr>
<tr>
    <td><a href="#list_fraudster_registration_jobs"><CopyableCode code="list_fraudster_registration_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the fraudster registration jobs in the domain with the given JobStatus. If JobStatus is not provided, this lists all fraudster registration jobs in the given domain.</td>
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
    defaultValue="describe_fraudster_registration_job"
    values={[
        { label: 'describe_fraudster_registration_job', value: 'describe_fraudster_registration_job' },
        { label: 'list_fraudster_registration_jobs', value: 'list_fraudster_registration_jobs' }
    ]}
>
<TabItem value="describe_fraudster_registration_job">

Describes the specified fraudster registration job.

```sql
SELECT
CreatedAt,
DataAccessRoleArn,
DomainId,
EndedAt,
FailureDetails,
InputDataConfig,
JobId,
JobName,
JobProgress,
JobStatus,
OutputDataConfig,
RegistrationConfig
FROM aws.voice_id.fraudster_registration_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fraudster_registration_jobs">

Lists all the fraudster registration jobs in the domain with the given JobStatus. If JobStatus is not provided, this lists all fraudster registration jobs in the given domain.

```sql
SELECT
CreatedAt,
DomainId,
EndedAt,
FailureDetails,
JobId,
JobName,
JobProgress,
JobStatus
FROM aws.voice_id.fraudster_registration_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
