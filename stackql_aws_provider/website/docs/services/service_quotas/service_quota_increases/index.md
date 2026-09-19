--- 
title: service_quota_increases
hide_title: false
hide_table_of_contents: false
keywords:
  - service_quota_increases
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

Creates, updates, deletes, gets or lists a <code>service_quota_increases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_quota_increases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.service_quota_increases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#request_service_quota_increase"><CopyableCode code="request_service_quota_increase" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceCode"><code>ServiceCode</code></a>, <a href="#parameter-QuotaCode"><code>QuotaCode</code></a>, <a href="#parameter-DesiredValue"><code>DesiredValue</code></a></td>
    <td></td>
    <td>Submits a quota increase request for the specified quota at the account or resource level.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="request_service_quota_increase"
    values={[
        { label: 'request_service_quota_increase', value: 'request_service_quota_increase' }
    ]}
>
<TabItem value="request_service_quota_increase">

Submits a quota increase request for the specified quota at the account or resource level.

```sql
EXEC aws.service_quotas.service_quota_increases.request_service_quota_increase 
@region='{{ region }}' --required 
@@json=
'{
"ServiceCode": "{{ ServiceCode }}", 
"QuotaCode": "{{ QuotaCode }}", 
"DesiredValue": {{ DesiredValue }}, 
"ContextId": "{{ ContextId }}", 
"SupportCaseAllowed": {{ SupportCaseAllowed }}
}'
;
```
</TabItem>
</Tabs>
