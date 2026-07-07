--- 
title: service_quota_increase_requests_in_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - service_quota_increase_requests_in_templates
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

Creates, updates, deletes, gets or lists a <code>service_quota_increase_requests_in_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_quota_increase_requests_in_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.service_quota_increase_requests_in_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_quota_increase_requests_in_template"
    values={[
        { label: 'list_service_quota_increase_requests_in_template', value: 'list_service_quota_increase_requests_in_template' }
    ]}
>
<TabItem value="list_service_quota_increase_requests_in_template">

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
    <td><CopyableCode code="AwsRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredValue" /></td>
    <td><code>number (double)</code></td>
    <td>The new, increased value of the quota.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalQuota" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota is global.</td>
</tr>
<tr>
    <td><CopyableCode code="QuotaCode" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the QuotaCode response in the output for the quota you want. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_service_quota_increase_requests_in_template"><CopyableCode code="list_service_quota_increase_requests_in_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the quota increase requests in the specified quota request template.</td>
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
    defaultValue="list_service_quota_increase_requests_in_template"
    values={[
        { label: 'list_service_quota_increase_requests_in_template', value: 'list_service_quota_increase_requests_in_template' }
    ]}
>
<TabItem value="list_service_quota_increase_requests_in_template">

Lists the quota increase requests in the specified quota request template.

```sql
SELECT
AwsRegion,
DesiredValue,
GlobalQuota,
QuotaCode,
QuotaName,
ServiceCode,
ServiceName,
Unit
FROM aws.service_quotas.service_quota_increase_requests_in_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
