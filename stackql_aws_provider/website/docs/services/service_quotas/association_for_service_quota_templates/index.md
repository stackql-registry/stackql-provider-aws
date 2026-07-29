--- 
title: association_for_service_quota_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - association_for_service_quota_templates
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

Creates, updates, deletes, gets or lists an <code>association_for_service_quota_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="association_for_service_quota_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.association_for_service_quota_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_association_for_service_quota_template"
    values={[
        { label: 'get_association_for_service_quota_template', value: 'get_association_for_service_quota_template' }
    ]}
>
<TabItem value="get_association_for_service_quota_template">

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
    <td><CopyableCode code="service_quota_template_association_status" /></td>
    <td><code>string</code></td>
    <td>The association status. If the status is ASSOCIATED, the quota increase requests in the template are automatically applied to new Amazon Web Services accounts in your organization. (ASSOCIATED, DISASSOCIATED)</td>
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
    <td><a href="#get_association_for_service_quota_template"><CopyableCode code="get_association_for_service_quota_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status of the association for the quota request template.</td>
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
    defaultValue="get_association_for_service_quota_template"
    values={[
        { label: 'get_association_for_service_quota_template', value: 'get_association_for_service_quota_template' }
    ]}
>
<TabItem value="get_association_for_service_quota_template">

Retrieves the status of the association for the quota request template.

```sql
SELECT
service_quota_template_association_status
FROM aws.service_quotas.association_for_service_quota_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
