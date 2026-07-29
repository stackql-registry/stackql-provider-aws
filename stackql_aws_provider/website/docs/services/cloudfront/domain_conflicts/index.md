--- 
title: domain_conflicts
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_conflicts
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

Creates, updates, deletes, gets or lists a <code>domain_conflicts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_conflicts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.domain_conflicts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_domain_conflicts"
    values={[
        { label: 'list_domain_conflicts', value: 'list_domain_conflicts' }
    ]}
>
<TabItem value="list_domain_conflicts">

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
    <td>The ID of the Amazon Web Services account for the domain conflict.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain used to find existing conflicts for domain configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource that has a domain conflict.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The CloudFront resource type that has a domain conflict.</td>
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
    <td><a href="#list_domain_conflicts"><CopyableCode code="list_domain_conflicts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>We recommend that you use the ListDomainConflicts API operation to check for domain conflicts, as it supports both standard distributions and distribution tenants. ListConflictingAliases performs similar checks but only supports standard distributions. Lists existing domain associations that conflict with the domain that you specify. You can use this API operation to identify potential domain conflicts when moving domains between standard distributions and/or distribution tenants. Domain conflicts must be resolved first before they can be moved. For example, if you provide www.example.com as input, the returned list can include www.example.com and the overlapping wildcard alternate domain name (.example.com), if they exist. If you provide .example.com as input, the returned list can include *.example.com and any alternate domain names covered by that wildcard (for example, www.example.com, test.example.com, dev.example.com, and so on), if they exist. To list conflicting domains, specify the following: The domain to search for The ID of a standard distribution or distribution tenant in your account that has an attached TLS certificate, which covers the specified domain For more information, including how to set up the standard distribution or distribution tenant, and the certificate, see Moving an alternate domain name to a different standard distribution or distribution tenant in the Amazon CloudFront Developer Guide. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
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
    defaultValue="list_domain_conflicts"
    values={[
        { label: 'list_domain_conflicts', value: 'list_domain_conflicts' }
    ]}
>
<TabItem value="list_domain_conflicts">

We recommend that you use the ListDomainConflicts API operation to check for domain conflicts, as it supports both standard distributions and distribution tenants. ListConflictingAliases performs similar checks but only supports standard distributions. Lists existing domain associations that conflict with the domain that you specify. You can use this API operation to identify potential domain conflicts when moving domains between standard distributions and/or distribution tenants. Domain conflicts must be resolved first before they can be moved. For example, if you provide www.example.com as input, the returned list can include www.example.com and the overlapping wildcard alternate domain name (.example.com), if they exist. If you provide .example.com as input, the returned list can include *.example.com and any alternate domain names covered by that wildcard (for example, www.example.com, test.example.com, dev.example.com, and so on), if they exist. To list conflicting domains, specify the following: The domain to search for The ID of a standard distribution or distribution tenant in your account that has an attached TLS certificate, which covers the specified domain For more information, including how to set up the standard distribution or distribution tenant, and the certificate, see Moving an alternate domain name to a different standard distribution or distribution tenant in the Amazon CloudFront Developer Guide. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
account_id,
domain,
resource_id,
resource_type
FROM aws.cloudfront.domain_conflicts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
