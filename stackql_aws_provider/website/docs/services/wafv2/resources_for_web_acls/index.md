--- 
title: resources_for_web_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - resources_for_web_acls
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>resources_for_web_acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources_for_web_acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.resources_for_web_acls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resources_for_web_acl"
    values={[
        { label: 'list_resources_for_web_acl', value: 'list_resources_for_web_acl' }
    ]}
>
<TabItem value="list_resources_for_web_acl">

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
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The array of Amazon Resource Names (ARNs) of the associated resources.</td>
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
    <td><a href="#list_resources_for_web_acl"><CopyableCode code="list_resources_for_web_acl" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an array of the Amazon Resource Names (ARNs) for the resources that are associated with the specified web ACL. For Amazon CloudFront, don't use this call. Instead, use the CloudFront call ListDistributionsByWebACLId. For information, see ListDistributionsByWebACLId in the Amazon CloudFront API Reference. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for ListResourcesForWebACL in the WAF Developer Guide.</td>
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
    defaultValue="list_resources_for_web_acl"
    values={[
        { label: 'list_resources_for_web_acl', value: 'list_resources_for_web_acl' }
    ]}
>
<TabItem value="list_resources_for_web_acl">

Retrieves an array of the Amazon Resource Names (ARNs) for the resources that are associated with the specified web ACL. For Amazon CloudFront, don't use this call. Instead, use the CloudFront call ListDistributionsByWebACLId. For information, see ListDistributionsByWebACLId in the Amazon CloudFront API Reference. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for ListResourcesForWebACL in the WAF Developer Guide.

```sql
SELECT
resource_arn
FROM aws.wafv2.resources_for_web_acls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
