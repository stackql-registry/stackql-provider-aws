--- 
title: investigations
hide_title: false
hide_table_of_contents: false
keywords:
  - investigations
  - guardduty
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

Creates, updates, deletes, gets or lists an <code>investigations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="investigations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.investigations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_investigation"
    values={[
        { label: 'get_investigation', value: 'get_investigation' },
        { label: 'list_investigations', value: 'list_investigations' }
    ]}
>
<TabItem value="get_investigation">

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
    <td><CopyableCode code="cloud" /></td>
    <td><code>object</code></td>
    <td>Details about the cloud environment in which the investigation was performed, including the provider, region, and account.</td>
</tr>
<tr>
    <td><CopyableCode code="confidence" /></td>
    <td><code>string</code></td>
    <td>The confidence level of the investigation's assessment. Possible values are Unknown, Low, Medium, and High. (Unknown, Low, Medium, High)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the investigation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Details about the error if the investigation status is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="investigation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the investigation. (pattern: &lt;code&gt;&#91;a-fA-F0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata about the product and version that produced the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="risk" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the assessed risk.</td>
</tr>
<tr>
    <td><CopyableCode code="risk_level" /></td>
    <td><code>string</code></td>
    <td>The assessed risk level of the investigated threat. Possible values are Info, Low, Medium, High, and Critical. (Info, Low, Medium, High, Critical)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the investigation started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the investigation. Possible values are RUNNING, COMPLETED, and FAILED. (RUNNING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A structured summary of the investigation findings, including affected resources, threat assessment, and recommended remediation steps.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_prompt" /></td>
    <td><code>string</code></td>
    <td>The natural-language prompt that initiated this investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="triggered_by" /></td>
    <td><code>string</code></td>
    <td>The account that initiated the investigation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_investigations">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="confidence" /></td>
    <td><code>string</code></td>
    <td>The confidence level of the investigation's assessment. (Unknown, Low, Medium, High)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the investigation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="investigation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the investigation. (pattern: &lt;code&gt;&#91;a-fA-F0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="risk_level" /></td>
    <td><code>string</code></td>
    <td>The assessed risk level of the investigated threat. (Info, Low, Medium, High, Critical)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the investigation started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the investigation. (RUNNING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A short title summarizing the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_prompt" /></td>
    <td><code>string</code></td>
    <td>The natural-language prompt that initiated this investigation.</td>
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
    <td><a href="#get_investigation"><CopyableCode code="get_investigation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-investigation_id"><code>investigation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Retrieves the results and status of a specific GuardDuty investigation. An administrator account can retrieve any investigation within the organization. Member accounts can only retrieve investigations that belong to them.</td>
</tr>
<tr>
    <td><a href="#list_investigations"><CopyableCode code="list_investigations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Returns a list of investigations associated with the specified GuardDuty detector. An administrator account sees all investigations across the organization. Member accounts see only the investigations that belong to them.</td>
</tr>
<tr>
    <td><a href="#create_investigation"><CopyableCode code="create_investigation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TriggerPrompt"><code>TriggerPrompt</code></a></td>
    <td></td>
    <td>This API is currently available as a preview. During the preview, you can initiate up to 10 investigations per account per day, with a total limit of 100 investigations per account. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Initiates a GuardDuty investigation that automatically analyzes security findings, correlates related activity, performs account-level analysis, and produces a structured investigation summary with recommended next steps. Only the administrator account can create an investigation. Member accounts don't have permission to create investigations from their accounts. To use this operation, the AI_ANALYST feature must be enabled on your detector. This feature uses Amazon Bedrock models that leverage Cross-Region Inference (CRIS), which automatically selects the optimal Amazon Web Services Region within your geography to process the investigation analysis and generate the investigation report. This maximizes available compute resources, model availability, and delivers the best customer experience. Your data remains stored only in the Region where the investigation request originates, however, investigation data and summary results may be processed outside that Region. All data is transmitted encrypted across Amazon's secure network. For more information, see GuardDuty Investigation.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the GuardDuty detector for the account in which the investigation is created. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-investigation_id">
    <td><CopyableCode code="investigation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the investigation to retrieve.</td>
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
    defaultValue="get_investigation"
    values={[
        { label: 'get_investigation', value: 'get_investigation' },
        { label: 'list_investigations', value: 'list_investigations' }
    ]}
>
<TabItem value="get_investigation">

This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Retrieves the results and status of a specific GuardDuty investigation. An administrator account can retrieve any investigation within the organization. Member accounts can only retrieve investigations that belong to them.

```sql
SELECT
cloud,
confidence,
end_time,
error,
investigation_id,
metadata,
risk,
risk_level,
start_time,
status,
summary,
trigger_prompt,
triggered_by
FROM aws.guardduty.investigations
WHERE detector_id = '{{ detector_id }}' -- required
AND investigation_id = '{{ investigation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_investigations">

This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Returns a list of investigations associated with the specified GuardDuty detector. An administrator account sees all investigations across the organization. Member accounts see only the investigations that belong to them.

```sql
SELECT
account_id,
confidence,
end_time,
investigation_id,
risk_level,
start_time,
status,
title,
trigger_prompt
FROM aws.guardduty.investigations
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_investigation"
    values={[
        { label: 'create_investigation', value: 'create_investigation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_investigation">

This API is currently available as a preview. During the preview, you can initiate up to 10 investigations per account per day, with a total limit of 100 investigations per account. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Initiates a GuardDuty investigation that automatically analyzes security findings, correlates related activity, performs account-level analysis, and produces a structured investigation summary with recommended next steps. Only the administrator account can create an investigation. Member accounts don't have permission to create investigations from their accounts. To use this operation, the AI_ANALYST feature must be enabled on your detector. This feature uses Amazon Bedrock models that leverage Cross-Region Inference (CRIS), which automatically selects the optimal Amazon Web Services Region within your geography to process the investigation analysis and generate the investigation report. This maximizes available compute resources, model availability, and delivers the best customer experience. Your data remains stored only in the Region where the investigation request originates, however, investigation data and summary results may be processed outside that Region. All data is transmitted encrypted across Amazon's secure network. For more information, see GuardDuty Investigation.

```sql
INSERT INTO aws.guardduty.investigations (
TriggerPrompt,
ClientToken,
detector_id,
region
)
SELECT 
'{{ TriggerPrompt }}' /* required */,
'{{ ClientToken }}',
'{{ detector_id }}',
'{{ region }}'
RETURNING
investigation_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: investigations
  props:
    - name: detector_id
      value: "{{ detector_id }}"
      description: Required parameter for the investigations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the investigations resource.
    - name: TriggerPrompt
      value: "{{ TriggerPrompt }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
