--- 
title: eks_anywhere_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - eks_anywhere_subscriptions
  - eks
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

Creates, updates, deletes, gets or lists an <code>eks_anywhere_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="eks_anywhere_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.eks_anywhere_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_eks_anywhere_subscription"
    values={[
        { label: 'describe_eks_anywhere_subscription', value: 'describe_eks_anywhere_subscription' },
        { label: 'list_eks_anywhere_subscriptions', value: 'list_eks_anywhere_subscriptions' }
    ]}
>
<TabItem value="describe_eks_anywhere_subscription">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>UUID identifying a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_renew" /></td>
    <td><code>boolean</code></td>
    <td>A boolean indicating whether or not a subscription will auto renew when it expires.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp in seconds for when the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp in seconds for when the subscription is effective.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp in seconds for when the subscription will expire or auto renew, depending on the auto renew configuration of the subscription object.</td>
</tr>
<tr>
    <td><CopyableCode code="license_arns" /></td>
    <td><code>array</code></td>
    <td>Amazon Web Services License Manager ARN associated with the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="license_quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of licenses included in a subscription. Valid values are between 1 and 100.</td>
</tr>
<tr>
    <td><CopyableCode code="license_type" /></td>
    <td><code>string</code></td>
    <td>The type of licenses included in the subscription. Valid value is CLUSTER. With the CLUSTER license type, each license covers support for a single EKS Anywhere cluster. (Cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>Includes all of the claims in the license token necessary to validate the license for extended support.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The metadata for a subscription to assist with categorization and organization. Each tag consists of a key and an optional value. Subscription tags do not propagate to any other resources associated with the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="term" /></td>
    <td><code>object</code></td>
    <td>An object representing the term duration and term unit type of your subscription. This determines the term length of your subscription. Valid values are MONTHS for term unit and 12 or 36 for term duration, indicating a 12 month or 36 month subscription.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_eks_anywhere_subscriptions">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>UUID identifying a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_renew" /></td>
    <td><code>boolean</code></td>
    <td>A boolean indicating whether or not a subscription will auto renew when it expires.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp in seconds for when the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp in seconds for when the subscription is effective.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp in seconds for when the subscription will expire or auto renew, depending on the auto renew configuration of the subscription object.</td>
</tr>
<tr>
    <td><CopyableCode code="license_arns" /></td>
    <td><code>array</code></td>
    <td>Amazon Web Services License Manager ARN associated with the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="license_quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of licenses included in a subscription. Valid values are between 1 and 100.</td>
</tr>
<tr>
    <td><CopyableCode code="license_type" /></td>
    <td><code>string</code></td>
    <td>The type of licenses included in the subscription. Valid value is CLUSTER. With the CLUSTER license type, each license covers support for a single EKS Anywhere cluster. (Cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>Includes all of the claims in the license token necessary to validate the license for extended support.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The metadata for a subscription to assist with categorization and organization. Each tag consists of a key and an optional value. Subscription tags do not propagate to any other resources associated with the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="term" /></td>
    <td><code>object</code></td>
    <td>An object representing the term duration and term unit type of your subscription. This determines the term length of your subscription. Valid values are MONTHS for term unit and 12 or 36 for term duration, indicating a 12 month or 36 month subscription.</td>
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
    <td><a href="#describe_eks_anywhere_subscription"><CopyableCode code="describe_eks_anywhere_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns descriptive information about a subscription.</td>
</tr>
<tr>
    <td><a href="#list_eks_anywhere_subscriptions"><CopyableCode code="list_eks_anywhere_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-includeStatus"><code>includeStatus</code></a></td>
    <td>Displays the full description of the subscription.</td>
</tr>
<tr>
    <td><a href="#create_eks_anywhere_subscription"><CopyableCode code="create_eks_anywhere_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-term"><code>term</code></a></td>
    <td></td>
    <td>Creates an EKS Anywhere subscription. When a subscription is created, it is a contract agreement for the length of the term specified in the request. Licenses that are used to validate support are provisioned in Amazon Web Services License Manager and the caller account is granted access to EKS Anywhere Curated Packages.</td>
</tr>
<tr>
    <td><a href="#update_eks_anywhere_subscription"><CopyableCode code="update_eks_anywhere_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autoRenew"><code>autoRenew</code></a></td>
    <td></td>
    <td>Update an EKS Anywhere Subscription. Only auto renewal and tags can be updated after subscription creation.</td>
</tr>
<tr>
    <td><a href="#delete_eks_anywhere_subscription"><CopyableCode code="delete_eks_anywhere_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an expired or inactive subscription. Deleting inactive subscriptions removes them from the Amazon Web Services Management Console view and from list/describe API responses. Subscriptions can only be cancelled within 7 days of creation and are cancelled by creating a ticket in the Amazon Web Services Support Center.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includeStatus">
    <td><CopyableCode code="includeStatus" /></td>
    <td><code>array</code></td>
    <td>An array of subscription statuses to filter on.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of cluster results returned by ListEksAnywhereSubscriptions in paginated output. When you use this parameter, ListEksAnywhereSubscriptions returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListEksAnywhereSubscriptions request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListEksAnywhereSubscriptions returns up to 10 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListEksAnywhereSubscriptions request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_eks_anywhere_subscription"
    values={[
        { label: 'describe_eks_anywhere_subscription', value: 'describe_eks_anywhere_subscription' },
        { label: 'list_eks_anywhere_subscriptions', value: 'list_eks_anywhere_subscriptions' }
    ]}
>
<TabItem value="describe_eks_anywhere_subscription">

Returns descriptive information about a subscription.

```sql
SELECT
id,
arn,
auto_renew,
created_at,
effective_date,
expiration_date,
license_arns,
license_quantity,
license_type,
licenses,
status,
tags,
term
FROM aws.eks.eks_anywhere_subscriptions
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_eks_anywhere_subscriptions">

Displays the full description of the subscription.

```sql
SELECT
id,
arn,
auto_renew,
created_at,
effective_date,
expiration_date,
license_arns,
license_quantity,
license_type,
licenses,
status,
tags,
term
FROM aws.eks.eks_anywhere_subscriptions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND includeStatus = '{{ includeStatus }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_eks_anywhere_subscription"
    values={[
        { label: 'create_eks_anywhere_subscription', value: 'create_eks_anywhere_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_eks_anywhere_subscription">

Creates an EKS Anywhere subscription. When a subscription is created, it is a contract agreement for the length of the term specified in the request. Licenses that are used to validate support are provisioned in Amazon Web Services License Manager and the caller account is granted access to EKS Anywhere Curated Packages.

```sql
INSERT INTO aws.eks.eks_anywhere_subscriptions (
name,
term,
licenseQuantity,
licenseType,
autoRenew,
clientRequestToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ term }}' /* required */,
{{ licenseQuantity }},
'{{ licenseType }}',
{{ autoRenew }},
'{{ clientRequestToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
subscription
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: eks_anywhere_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the eks_anywhere_subscriptions resource.
    - name: name
      value: "{{ name }}"
    - name: term
      description: |
        An object representing the term duration and term unit type of your subscription. This determines the term length of your subscription. Valid values are MONTHS for term unit and 12 or 36 for term duration, indicating a 12 month or 36 month subscription.
      value:
        duration: {{ duration }}
        unit: "{{ unit }}"
    - name: licenseQuantity
      value: {{ licenseQuantity }}
    - name: licenseType
      value: "{{ licenseType }}"
      valid_values: ['Cluster']
    - name: autoRenew
      value: {{ autoRenew }}
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_eks_anywhere_subscription"
    values={[
        { label: 'update_eks_anywhere_subscription', value: 'update_eks_anywhere_subscription' }
    ]}
>
<TabItem value="update_eks_anywhere_subscription">

Update an EKS Anywhere Subscription. Only auto renewal and tags can be updated after subscription creation.

```sql
UPDATE aws.eks.eks_anywhere_subscriptions
SET 
autoRenew = {{ autoRenew }},
clientRequestToken = '{{ clientRequestToken }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND autoRenew = {{ autoRenew }} --required
RETURNING
subscription;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_eks_anywhere_subscription"
    values={[
        { label: 'delete_eks_anywhere_subscription', value: 'delete_eks_anywhere_subscription' }
    ]}
>
<TabItem value="delete_eks_anywhere_subscription">

Deletes an expired or inactive subscription. Deleting inactive subscriptions removes them from the Amazon Web Services Management Console view and from list/describe API responses. Subscriptions can only be cancelled within 7 days of creation and are cancelled by creating a ticket in the Amazon Web Services Support Center.

```sql
DELETE FROM aws.eks.eks_anywhere_subscriptions
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
