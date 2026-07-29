--- 
title: service_quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - service_quotas
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

Creates, updates, deletes, gets or lists a <code>service_quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.service_quotas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_quota"
    values={[
        { label: 'get_service_quota', value: 'get_service_quota' },
        { label: 'list_service_quotas', value: 'list_service_quotas' }
    ]}
>
<TabItem value="get_service_quota">

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
    <td><CopyableCode code="adjustable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota value can be increased.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The quota description. (pattern: &lt;code&gt;^.&#123;0,350&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_reason" /></td>
    <td><code>object</code></td>
    <td>The error code and error reason.</td>
</tr>
<tr>
    <td><CopyableCode code="global_quota" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota is global.</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>object</code></td>
    <td>The period of time.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_applied_at_level" /></td>
    <td><code>string</code></td>
    <td>Filters the response to return applied quota values for the ACCOUNT, RESOURCE, or ALL levels. ACCOUNT is the default. (ACCOUNT, RESOURCE, ALL)</td>
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
<tr>
    <td><CopyableCode code="usage_metric" /></td>
    <td><code>object</code></td>
    <td>Information about the measurement.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>number (double)</code></td>
    <td>The quota value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_quotas">

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
    <td><CopyableCode code="adjustable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota value can be increased.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The quota description. (pattern: &lt;code&gt;^.&#123;0,350&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_reason" /></td>
    <td><code>object</code></td>
    <td>The error code and error reason.</td>
</tr>
<tr>
    <td><CopyableCode code="global_quota" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the quota is global.</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>object</code></td>
    <td>The period of time.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_applied_at_level" /></td>
    <td><code>string</code></td>
    <td>Filters the response to return applied quota values for the ACCOUNT, RESOURCE, or ALL levels. ACCOUNT is the default. (ACCOUNT, RESOURCE, ALL)</td>
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
<tr>
    <td><CopyableCode code="usage_metric" /></td>
    <td><code>object</code></td>
    <td>Information about the measurement.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
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
    <td><a href="#get_service_quota"><CopyableCode code="get_service_quota" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the applied quota value for the specified account-level or resource-level quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.</td>
</tr>
<tr>
    <td><a href="#list_service_quotas"><CopyableCode code="list_service_quotas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the applied quota values for the specified Amazon Web Services service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved. Filter responses to return applied quota values at either the account level, resource level, or all levels.</td>
</tr>
<tr>
    <td><a href="#associate_service_quota_template"><CopyableCode code="associate_service_quota_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates your quota request template with your organization. When a new Amazon Web Services account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.</td>
</tr>
<tr>
    <td><a href="#put_service_quota_increase_request_into_template"><CopyableCode code="put_service_quota_increase_request_into_template" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QuotaCode"><code>QuotaCode</code></a>, <a href="#parameter-ServiceCode"><code>ServiceCode</code></a>, <a href="#parameter-AwsRegion"><code>AwsRegion</code></a>, <a href="#parameter-DesiredValue"><code>DesiredValue</code></a></td>
    <td></td>
    <td>Adds a quota increase request to your quota request template.</td>
</tr>
<tr>
    <td><a href="#disassociate_service_quota_template"><CopyableCode code="disassociate_service_quota_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new Amazon Web Services accounts in your organization. Disabling a quota request template does not apply its quota increase requests.</td>
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
    defaultValue="get_service_quota"
    values={[
        { label: 'get_service_quota', value: 'get_service_quota' },
        { label: 'list_service_quotas', value: 'list_service_quotas' }
    ]}
>
<TabItem value="get_service_quota">

Retrieves the applied quota value for the specified account-level or resource-level quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

```sql
SELECT
adjustable,
description,
error_reason,
global_quota,
period,
quota_applied_at_level,
quota_arn,
quota_code,
quota_context,
quota_name,
service_code,
service_name,
unit,
usage_metric,
value
FROM aws.service_quotas.service_quotas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_quotas">

Lists the applied quota values for the specified Amazon Web Services service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved. Filter responses to return applied quota values at either the account level, resource level, or all levels.

```sql
SELECT
adjustable,
description,
error_reason,
global_quota,
period,
quota_applied_at_level,
quota_arn,
quota_code,
quota_context,
quota_name,
service_code,
service_name,
unit,
usage_metric,
value
FROM aws.service_quotas.service_quotas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_service_quota_template"
    values={[
        { label: 'associate_service_quota_template', value: 'associate_service_quota_template' }
    ]}
>
<TabItem value="associate_service_quota_template">

Associates your quota request template with your organization. When a new Amazon Web Services account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.

```sql
UPDATE aws.service_quotas.service_quotas
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_service_quota_increase_request_into_template"
    values={[
        { label: 'put_service_quota_increase_request_into_template', value: 'put_service_quota_increase_request_into_template' }
    ]}
>
<TabItem value="put_service_quota_increase_request_into_template">

Adds a quota increase request to your quota request template.

```sql
REPLACE aws.service_quotas.service_quotas
SET 
QuotaCode = '{{ QuotaCode }}',
ServiceCode = '{{ ServiceCode }}',
AwsRegion = '{{ AwsRegion }}',
DesiredValue = {{ DesiredValue }}
WHERE 
region = '{{ region }}' --required
AND QuotaCode = '{{ QuotaCode }}' --required
AND ServiceCode = '{{ ServiceCode }}' --required
AND AwsRegion = '{{ AwsRegion }}' --required
AND DesiredValue = '{{ DesiredValue }}' --required
RETURNING
service_quota_increase_request_in_template;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_service_quota_template"
    values={[
        { label: 'disassociate_service_quota_template', value: 'disassociate_service_quota_template' }
    ]}
>
<TabItem value="disassociate_service_quota_template">

Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new Amazon Web Services accounts in your organization. Disabling a quota request template does not apply its quota increase requests.

```sql
EXEC aws.service_quotas.service_quotas.disassociate_service_quota_template 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
