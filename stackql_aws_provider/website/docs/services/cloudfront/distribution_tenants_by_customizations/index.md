--- 
title: distribution_tenants_by_customizations
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_tenants_by_customizations
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>distribution_tenants_by_customizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distribution_tenants_by_customizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.distribution_tenants_by_customizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_distribution_tenants_by_customization"
    values={[
        { label: 'list_distribution_tenants_by_customization', value: 'list_distribution_tenants_by_customization' }
    ]}
>
<TabItem value="list_distribution_tenants_by_customization">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection group ID for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the distribution tenant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Customizations" /></td>
    <td><code>string</code></td>
    <td>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="DistributionId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the multi-tenant distribution. For example: EDFDVBD632BHDS5.</td>
</tr>
<tr>
    <td><CopyableCode code="Domains" /></td>
    <td><code>string</code></td>
    <td>The domains associated with the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The current version of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the distribution tenants are in an enabled state. If disabled, the distribution tenant won't service traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the distribution tenant was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the distribution tenant.</td>
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
    <td><a href="#list_distribution_tenants_by_customization"><CopyableCode code="list_distribution_tenants_by_customization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists distribution tenants by the customization that you specify. You must specify either the CertificateArn parameter or WebACLArn parameter, but not both in the same request.</td>
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
    defaultValue="list_distribution_tenants_by_customization"
    values={[
        { label: 'list_distribution_tenants_by_customization', value: 'list_distribution_tenants_by_customization' }
    ]}
>
<TabItem value="list_distribution_tenants_by_customization">

Lists distribution tenants by the customization that you specify. You must specify either the CertificateArn parameter or WebACLArn parameter, but not both in the same request.

```sql
SELECT
Arn,
ConnectionGroupId,
CreatedTime,
Customizations,
DistributionId,
Domains,
ETag,
Enabled,
Id,
LastModifiedTime,
Name,
Status
FROM aws.cloudfront.distribution_tenants_by_customizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
