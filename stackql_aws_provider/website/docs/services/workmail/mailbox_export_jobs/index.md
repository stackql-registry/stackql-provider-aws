--- 
title: mailbox_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - mailbox_export_jobs
  - workmail
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

Creates, updates, deletes, gets or lists a <code>mailbox_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mailbox_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.mailbox_export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mailbox_export_job"
    values={[
        { label: 'describe_mailbox_export_job', value: 'describe_mailbox_export_job' },
        { label: 'list_mailbox_export_jobs', value: 'list_mailbox_export_jobs' }
    ]}
>
<TabItem value="describe_mailbox_export_job">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The mailbox export job description. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The mailbox export job end timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or resource associated with the mailbox.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>string</code></td>
    <td>Error information for failed mailbox export jobs. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_progress" /></td>
    <td><code>integer</code></td>
    <td>The estimated progress of the mailbox export job, in percentage points.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS) key that encrypts the exported mailbox content. (pattern: &lt;code&gt;arn:aws:kms:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;+:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the Amazon Simple Storage Service (Amazon S3) bucket. (pattern: &lt;code&gt;arn:aws:iam:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;+:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket_name" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 bucket. (pattern: &lt;code&gt;&#91;A-Za-z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_path" /></td>
    <td><code>string</code></td>
    <td>The path to the S3 bucket and file that the mailbox export job is exporting to. (pattern: &lt;code&gt;&#91;A-Za-z0-9!_.*'()/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_prefix" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket prefix. (pattern: &lt;code&gt;&#91;A-Za-z0-9!_.*'()/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The mailbox export job start timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the mailbox export job. (RUNNING, COMPLETED, FAILED, CANCELLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mailbox_export_jobs">

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
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>The mailbox export job details.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. (pattern: &lt;code&gt;&#91;\S\s&#93;*|&#91;a-zA-Z0-9/+=&#93;&#123;1,1024&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_mailbox_export_job"><CopyableCode code="describe_mailbox_export_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the current status of a mailbox export job.</td>
</tr>
<tr>
    <td><a href="#list_mailbox_export_jobs"><CopyableCode code="list_mailbox_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the mailbox export jobs started for the specified organization within the last seven days.</td>
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
    defaultValue="describe_mailbox_export_job"
    values={[
        { label: 'describe_mailbox_export_job', value: 'describe_mailbox_export_job' },
        { label: 'list_mailbox_export_jobs', value: 'list_mailbox_export_jobs' }
    ]}
>
<TabItem value="describe_mailbox_export_job">

Describes the current status of a mailbox export job.

```sql
SELECT
description,
end_time,
entity_id,
error_info,
estimated_progress,
kms_key_arn,
role_arn,
s3_bucket_name,
s3_path,
s3_prefix,
start_time,
state
FROM aws.workmail.mailbox_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_mailbox_export_jobs">

Lists the mailbox export jobs started for the specified organization within the last seven days.

```sql
SELECT
jobs,
next_token
FROM aws.workmail.mailbox_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
