--- 
title: conflicting_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - conflicting_aliases
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

Creates, updates, deletes, gets or lists a <code>conflicting_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conflicting_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.conflicting_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_conflicting_aliases"
    values={[
        { label: 'list_conflicting_aliases', value: 'list_conflicting_aliases' }
    ]}
>
<TabItem value="list_conflicting_aliases">

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
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Contains the conflicting aliases in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of conflicting aliases requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the Marker field of a subsequent request to continue listing conflicting aliases where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of conflicting aliases returned in the response.</td>
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
    <td><a href="#list_conflicting_aliases"><CopyableCode code="list_conflicting_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DistributionId"><code>DistributionId</code></a>, <a href="#parameter-Alias"><code>Alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>The ListConflictingAliases API operation only supports standard distributions. To list domain conflicts for both standard distributions and distribution tenants, we recommend that you use the ListDomainConflicts API operation instead. Gets a list of aliases that conflict or overlap with the provided alias, and the associated CloudFront standard distribution and Amazon Web Services accounts for each conflicting alias. An alias is commonly known as a custom domain or vanity domain. It can also be called a CNAME or alternate domain name. In the returned list, the standard distribution and account IDs are partially hidden, which allows you to identify the standard distribution and accounts that you own, and helps to protect the information of ones that you don't own. Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide www.example.com as input, the returned list can include www.example.com and the overlapping wildcard alternate domain name (.example.com), if they exist. If you provide .example.com as input, the returned list can include *.example.com and any alternate domain names covered by that wildcard (for example, www.example.com, test.example.com, dev.example.com, and so on), if they exist. To list conflicting aliases, specify the alias to search and the ID of a standard distribution in your account that has an attached TLS certificate that includes the provided alias. For more information, including how to set up the standard distribution and certificate, see Moving an alternate domain name to a different standard distribution or distribution tenant in the Amazon CloudFront Developer Guide. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
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
<tr id="parameter-Alias">
    <td><CopyableCode code="Alias" /></td>
    <td><code>string</code></td>
    <td>The alias (also called a CNAME) to search for conflicting aliases.</td>
</tr>
<tr id="parameter-DistributionId">
    <td><CopyableCode code="DistributionId" /></td>
    <td><code>string</code></td>
    <td>The ID of a standard distribution in your account that has an attached TLS certificate that includes the provided alias.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of conflicting aliases that you want in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_conflicting_aliases"
    values={[
        { label: 'list_conflicting_aliases', value: 'list_conflicting_aliases' }
    ]}
>
<TabItem value="list_conflicting_aliases">

The ListConflictingAliases API operation only supports standard distributions. To list domain conflicts for both standard distributions and distribution tenants, we recommend that you use the ListDomainConflicts API operation instead. Gets a list of aliases that conflict or overlap with the provided alias, and the associated CloudFront standard distribution and Amazon Web Services accounts for each conflicting alias. An alias is commonly known as a custom domain or vanity domain. It can also be called a CNAME or alternate domain name. In the returned list, the standard distribution and account IDs are partially hidden, which allows you to identify the standard distribution and accounts that you own, and helps to protect the information of ones that you don't own. Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide www.example.com as input, the returned list can include www.example.com and the overlapping wildcard alternate domain name (.example.com), if they exist. If you provide .example.com as input, the returned list can include *.example.com and any alternate domain names covered by that wildcard (for example, www.example.com, test.example.com, dev.example.com, and so on), if they exist. To list conflicting aliases, specify the alias to search and the ID of a standard distribution in your account that has an attached TLS certificate that includes the provided alias. For more information, including how to set up the standard distribution and certificate, see Moving an alternate domain name to a different standard distribution or distribution tenant in the Amazon CloudFront Developer Guide. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
items,
max_items,
next_marker,
quantity
FROM aws.cloudfront.conflicting_aliases
WHERE DistributionId = '{{ DistributionId }}' -- required
AND Alias = '{{ Alias }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
