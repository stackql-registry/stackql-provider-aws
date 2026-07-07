--- 
title: aws_default_service_quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_default_service_quotas
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

Creates, updates, deletes, gets or lists an <code>aws_default_service_quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_default_service_quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.aws_default_service_quotas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aws_default_service_quota"
    values={[
        { label: 'get_aws_default_service_quota', value: 'get_aws_default_service_quota' },
        { label: 'list_aws_default_service_quotas', value: 'list_aws_default_service_quotas' }
    ]}
>
<TabItem value="get_aws_default_service_quota">

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
    <td><CopyableCode code="Adjustable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota value can be increased.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The quota description. (pattern: &lt;code&gt;^.&#123;0,350&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorReason" /></td>
    <td><code>object</code></td>
    <td>The error code and error reason.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalQuota" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota is global.</td>
</tr>
<tr>
    <td><CopyableCode code="Period" /></td>
    <td><code>object</code></td>
    <td>The period of time.</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaAppliedAtLevel" /></td>
    <td><code>string</code></td>
    <td>Filters the response to return applied quota values for the ACCOUNT, RESOURCE, or ALL levels. ACCOUNT is the default. (ACCOUNT, RESOURCE, ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quota.</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaCode" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the QuotaCode response in the output for the quota you want. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaContext" /></td>
    <td><code>object</code></td>
    <td>The context for this service quota.</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaName" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota name.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceCode" /></td>
    <td><code>string</code></td>
    <td>Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceName" /></td>
    <td><code>string</code></td>
    <td>Specifies the service name.</td>
</tr>
<tr>
    <td><CopyableCode code="Unit" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement.</td>
</tr>
<tr>
    <td><CopyableCode code="UsageMetric" /></td>
    <td><code>object</code></td>
    <td>Information about the measurement.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>number (double)</code></td>
    <td>The quota value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_aws_default_service_quotas">

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
    <td><CopyableCode code="Adjustable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota value can be increased.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The quota description. (pattern: &lt;code&gt;^.&#123;0,350&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorReason" /></td>
    <td><code>object</code></td>
    <td>The error code and error reason.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalQuota" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota is global.</td>
</tr>
<tr>
    <td><CopyableCode code="Period" /></td>
    <td><code>object</code></td>
    <td>The period of time.</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaAppliedAtLevel" /></td>
    <td><code>string</code></td>
    <td>Filters the response to return applied quota values for the ACCOUNT, RESOURCE, or ALL levels. ACCOUNT is the default. (ACCOUNT, RESOURCE, ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quota.</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaCode" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the QuotaCode response in the output for the quota you want. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaContext" /></td>
    <td><code>object</code></td>
    <td>The context for this service quota.</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaName" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota name.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceCode" /></td>
    <td><code>string</code></td>
    <td>Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceName" /></td>
    <td><code>string</code></td>
    <td>Specifies the service name.</td>
</tr>
<tr>
    <td><CopyableCode code="Unit" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement.</td>
</tr>
<tr>
    <td><CopyableCode code="UsageMetric" /></td>
    <td><code>object</code></td>
    <td>Information about the measurement.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>number (double)</code></td>
    <td>The quota value.</td>
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
    <td><a href="#get_aws_default_service_quota"><CopyableCode code="get_aws_default_service_quota" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the default value for the specified quota. The default value does not reflect any quota increases.</td>
</tr>
<tr>
    <td><a href="#list_aws_default_service_quotas"><CopyableCode code="list_aws_default_service_quotas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the default values for the quotas for the specified Amazon Web Services service. A default value does not reflect any quota increases.</td>
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
    defaultValue="get_aws_default_service_quota"
    values={[
        { label: 'get_aws_default_service_quota', value: 'get_aws_default_service_quota' },
        { label: 'list_aws_default_service_quotas', value: 'list_aws_default_service_quotas' }
    ]}
>
<TabItem value="get_aws_default_service_quota">

Retrieves the default value for the specified quota. The default value does not reflect any quota increases.

```sql
SELECT
Adjustable,
Description,
ErrorReason,
GlobalQuota,
Period,
QuotaAppliedAtLevel,
QuotaArn,
QuotaCode,
QuotaContext,
QuotaName,
ServiceCode,
ServiceName,
Unit,
UsageMetric,
Value
FROM aws.service_quotas.aws_default_service_quotas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_aws_default_service_quotas">

Lists the default values for the quotas for the specified Amazon Web Services service. A default value does not reflect any quota increases.

```sql
SELECT
Adjustable,
Description,
ErrorReason,
GlobalQuota,
Period,
QuotaAppliedAtLevel,
QuotaArn,
QuotaCode,
QuotaContext,
QuotaName,
ServiceCode,
ServiceName,
Unit,
UsageMetric,
Value
FROM aws.service_quotas.aws_default_service_quotas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
