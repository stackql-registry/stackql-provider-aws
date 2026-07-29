--- 
title: requested_service_quota_changes
hide_title: false
hide_table_of_contents: false
keywords:
  - requested_service_quota_changes
  - service_quotas
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

Creates, updates, deletes, gets or lists a <code>requested_service_quota_changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="requested_service_quota_changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.requested_service_quota_changes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_requested_service_quota_change"
    values={[
        { label: 'get_requested_service_quota_change', value: 'get_requested_service_quota_change' }
    ]}
>
<TabItem value="get_requested_service_quota_change">

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
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>The case ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the quota increase request was received and the case ID was created.</td>
</tr>
<tr>
    <td><CopyableCode code="desired_value" /></td>
    <td><code>number (double)</code></td>
    <td>The new, increased value for the quota.</td>
</tr>
<tr>
    <td><CopyableCode code="global_quota" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota is global.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the most recent change.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quota.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_code" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the QuotaCode response in the output for the quota you want. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_context" /></td>
    <td><code>object</code></td>
    <td>The context for this service quota.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_name" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota name.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_requested_at_level" /></td>
    <td><code>string</code></td>
    <td>Filters the response to return quota requests for the ACCOUNT, RESOURCE, or ALL levels. ACCOUNT is the default. (ACCOUNT, RESOURCE, ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="request_type" /></td>
    <td><code>string</code></td>
    <td>The type of quota increase request. Possible values include: AutomaticManagement - The request was automatically created by Service Quotas Automatic Management when quota utilization approached the limit. If this field is not present, the request was manually created by a user. (AutomaticManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="requester" /></td>
    <td><code>string</code></td>
    <td>The IAM identity of the requester.</td>
</tr>
<tr>
    <td><CopyableCode code="service_code" /></td>
    <td><code>string</code></td>
    <td>Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Specifies the service name.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the quota increase request. PENDING: The quota increase request is under review by Amazon Web Services. CASE_OPENED: Service Quotas opened a support case to process the quota increase request. Follow-up on the support case for more information. APPROVED: The quota increase request is approved. DENIED: The quota increase request can't be approved by Service Quotas. Contact Amazon Web Services Support for more details. NOT APPROVED: The quota increase request can't be approved by Service Quotas. Contact Amazon Web Services Support for more details. CASE_CLOSED: The support case associated with this quota increase request was closed. Check the support case correspondence for the outcome of your quota request. INVALID_REQUEST: Service Quotas couldn't process your resource-level quota increase request because the Amazon Resource Name (ARN) specified as part of the ContextId is invalid. (PENDING, CASE_OPENED, APPROVED, DENIED, CASE_CLOSED, NOT_APPROVED, INVALID_REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement.</td>
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
    <td><a href="#get_requested_service_quota_change"><CopyableCode code="get_requested_service_quota_change" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified quota increase request.</td>
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
    defaultValue="get_requested_service_quota_change"
    values={[
        { label: 'get_requested_service_quota_change', value: 'get_requested_service_quota_change' }
    ]}
>
<TabItem value="get_requested_service_quota_change">

Retrieves information about the specified quota increase request.

```sql
SELECT
case_id,
created,
desired_value,
global_quota,
id,
last_updated,
quota_arn,
quota_code,
quota_context,
quota_name,
quota_requested_at_level,
request_type,
requester,
service_code,
service_name,
status,
unit
FROM aws.service_quotas.requested_service_quota_changes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
