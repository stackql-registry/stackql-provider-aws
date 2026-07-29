--- 
title: service_quota_increase_request_from_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - service_quota_increase_request_from_templates
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

Creates, updates, deletes, gets or lists a <code>service_quota_increase_request_from_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_quota_increase_request_from_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.service_quota_increase_request_from_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_quota_increase_request_from_template"
    values={[
        { label: 'get_service_quota_increase_request_from_template', value: 'get_service_quota_increase_request_from_template' }
    ]}
>
<TabItem value="get_service_quota_increase_request_from_template">

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
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desired_value" /></td>
    <td><code>number (double)</code></td>
    <td>The new, increased value of the quota.</td>
</tr>
<tr>
    <td><CopyableCode code="global_quota" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota is global.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_code" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the QuotaCode response in the output for the quota you want. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_name" /></td>
    <td><code>string</code></td>
    <td>Specifies the quota name.</td>
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
    <td><a href="#get_service_quota_increase_request_from_template"><CopyableCode code="get_service_quota_increase_request_from_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified quota increase request in your quota request template.</td>
</tr>
<tr>
    <td><a href="#delete_service_quota_increase_request_from_template"><CopyableCode code="delete_service_quota_increase_request_from_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the quota increase request for the specified quota from your quota request template.</td>
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
    defaultValue="get_service_quota_increase_request_from_template"
    values={[
        { label: 'get_service_quota_increase_request_from_template', value: 'get_service_quota_increase_request_from_template' }
    ]}
>
<TabItem value="get_service_quota_increase_request_from_template">

Retrieves information about the specified quota increase request in your quota request template.

```sql
SELECT
aws_region,
desired_value,
global_quota,
quota_code,
quota_name,
service_code,
service_name,
unit
FROM aws.service_quotas.service_quota_increase_request_from_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_quota_increase_request_from_template"
    values={[
        { label: 'delete_service_quota_increase_request_from_template', value: 'delete_service_quota_increase_request_from_template' }
    ]}
>
<TabItem value="delete_service_quota_increase_request_from_template">

Deletes the quota increase request for the specified quota from your quota request template.

```sql
DELETE FROM aws.service_quotas.service_quota_increase_request_from_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
