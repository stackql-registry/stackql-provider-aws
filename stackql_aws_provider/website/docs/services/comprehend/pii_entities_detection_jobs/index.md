--- 
title: pii_entities_detection_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - pii_entities_detection_jobs
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

Creates, updates, deletes, gets or lists a <code>pii_entities_detection_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pii_entities_detection_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.pii_entities_detection_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pii_entities_detection_job"
    values={[
        { label: 'describe_pii_entities_detection_job', value: 'describe_pii_entities_detection_job' },
        { label: 'list_pii_entities_detection_jobs', value: 'list_pii_entities_detection_jobs' }
    ]}
>
<TabItem value="describe_pii_entities_detection_job">

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
    <td>The time that the PII entities detection job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>The input properties for a PII entities detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows: arn:<code>&lt;partition&gt;</code>:comprehend:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:pii-entities-detection-job/<code>&lt;job-id&gt;</code> The following is an example job ARN: arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*((/dataset/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)|(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier assigned to the PII entities detection job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned the PII entities detection job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the PII entities detection job. If the status is FAILED, the Message field shows the reason for the failure. (SUBMITTED, IN_PROGRESS, COMPLETED, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code of the input documents. (en, es, fr, de, it, pt, ar, hi, ja, ko, zh, zh-TW)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted. (ONLY_REDACTION, ONLY_OFFSETS)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>The output data configuration that you supplied when you created the PII entities detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="redaction_config" /></td>
    <td><code>object</code></td>
    <td>Provides configuration parameters for PII entity redaction. This parameter is required if you set the Mode parameter to ONLY_REDACTION. In that case, you must provide a RedactionConfig definition that includes the PiiEntityTypes parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the PII entities detection job was submitted for processing.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pii_entities_detection_jobs">

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
    <td>The time that the PII entities detection job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>The input properties for a PII entities detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows: arn:<code>&lt;partition&gt;</code>:comprehend:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:pii-entities-detection-job/<code>&lt;job-id&gt;</code> The following is an example job ARN: arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*((/dataset/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)|(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier assigned to the PII entities detection job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned the PII entities detection job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the PII entities detection job. If the status is FAILED, the Message field shows the reason for the failure. (SUBMITTED, IN_PROGRESS, COMPLETED, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code of the input documents. (en, es, fr, de, it, pt, ar, hi, ja, ko, zh, zh-TW)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted. (ONLY_REDACTION, ONLY_OFFSETS)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>The output data configuration that you supplied when you created the PII entities detection job.</td>
</tr>
<tr>
    <td><CopyableCode code="redaction_config" /></td>
    <td><code>object</code></td>
    <td>Provides configuration parameters for PII entity redaction. This parameter is required if you set the Mode parameter to ONLY_REDACTION. In that case, you must provide a RedactionConfig definition that includes the PiiEntityTypes parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the PII entities detection job was submitted for processing.</td>
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
    <td><a href="#describe_pii_entities_detection_job"><CopyableCode code="describe_pii_entities_detection_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.</td>
</tr>
<tr>
    <td><a href="#list_pii_entities_detection_jobs"><CopyableCode code="list_pii_entities_detection_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the PII entity detection jobs that you have submitted.</td>
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
    defaultValue="describe_pii_entities_detection_job"
    values={[
        { label: 'describe_pii_entities_detection_job', value: 'describe_pii_entities_detection_job' },
        { label: 'list_pii_entities_detection_jobs', value: 'list_pii_entities_detection_jobs' }
    ]}
>
<TabItem value="describe_pii_entities_detection_job">

Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.

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
mode,
output_data_config,
redaction_config,
submit_time
FROM aws.comprehend.pii_entities_detection_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pii_entities_detection_jobs">

Gets a list of the PII entity detection jobs that you have submitted.

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
mode,
output_data_config,
redaction_config,
submit_time
FROM aws.comprehend.pii_entities_detection_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
