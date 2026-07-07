--- 
title: origin_request_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_request_policies
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

Creates, updates, deletes, gets or lists an <code>origin_request_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="origin_request_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.origin_request_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_origin_request_policy"
    values={[
        { label: 'get_origin_request_policy', value: 'get_origin_request_policy' },
        { label: 'list_origin_request_policies', value: 'list_origin_request_policies' }
    ]}
>
<TabItem value="get_origin_request_policy">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the origin request policy.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the origin request policy was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginRequestPolicyConfig" /></td>
    <td><code>string</code></td>
    <td>The origin request policy configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_origin_request_policies">

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
    <td><CopyableCode code="Items" /></td>
    <td><code>string</code></td>
    <td>Contains the origin request policies in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of origin request policies requested.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the Marker field of a subsequent request to continue listing origin request policies where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The total number of origin request policies returned in the response.</td>
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
    <td><a href="#get_origin_request_policy"><CopyableCode code="get_origin_request_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an origin request policy, including the following metadata: The policy's identifier. The date and time when the policy was last modified. To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the origin request policy is not attached to a cache behavior, you can get the identifier using ListOriginRequestPolicies.</td>
</tr>
<tr>
    <td><a href="#list_origin_request_policies"><CopyableCode code="list_origin_request_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of origin request policies. You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#create_origin_request_policy"><CopyableCode code="create_origin_request_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OriginRequestPolicyConfig"><code>OriginRequestPolicyConfig</code></a></td>
    <td></td>
    <td>Creates an origin request policy. After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following: The request body and the URL path (without the domain name) from the viewer request. The headers that CloudFront automatically includes in every origin request, including Host, User-Agent, and X-Amz-Cf-Id. All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront. CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use CachePolicy. For more information about origin request policies, see Controlling origin requests in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_origin_request_policy"><CopyableCode code="update_origin_request_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OriginRequestPolicyConfig"><code>OriginRequestPolicyConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Updates an origin request policy configuration. When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration: Use GetOriginRequestPolicyConfig to get the current configuration. Locally modify the fields in the origin request policy configuration that you want to update. Call UpdateOriginRequestPolicy by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</td>
</tr>
<tr>
    <td><a href="#delete_origin_request_policy"><CopyableCode code="delete_origin_request_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Deletes an origin request policy. You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy. To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use ListOriginRequestPolicies or GetOriginRequestPolicy.</td>
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
    <td>The unique identifier for the origin request policy that you are deleting. To get the identifier, you can use ListOriginRequestPolicies.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The version of the origin request policy that you are deleting. The version is the origin request policy's ETag value, which you can get using ListOriginRequestPolicies, GetOriginRequestPolicy, or GetOriginRequestPolicyConfig.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of origin request policies that you want in the response.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>A filter to return only the specified kinds of origin request policies. Valid values are: managed – Returns only the managed policies created by Amazon Web Services. custom – Returns only the custom policies created in your Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_origin_request_policy"
    values={[
        { label: 'get_origin_request_policy', value: 'get_origin_request_policy' },
        { label: 'list_origin_request_policies', value: 'list_origin_request_policies' }
    ]}
>
<TabItem value="get_origin_request_policy">

Gets an origin request policy, including the following metadata: The policy's identifier. The date and time when the policy was last modified. To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the origin request policy is not attached to a cache behavior, you can get the identifier using ListOriginRequestPolicies.

```sql
SELECT
Id,
LastModifiedTime,
OriginRequestPolicyConfig
FROM aws.cloudfront.origin_request_policies
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_origin_request_policies">

Gets a list of origin request policies. You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
Items,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.origin_request_policies
WHERE region = '{{ region }}' -- required
AND Type = '{{ Type }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_origin_request_policy"
    values={[
        { label: 'create_origin_request_policy', value: 'create_origin_request_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_origin_request_policy">

Creates an origin request policy. After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following: The request body and the URL path (without the domain name) from the viewer request. The headers that CloudFront automatically includes in every origin request, including Host, User-Agent, and X-Amz-Cf-Id. All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront. CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use CachePolicy. For more information about origin request policies, see Controlling origin requests in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.origin_request_policies (
OriginRequestPolicyConfig,
region
)
SELECT 
'{{ OriginRequestPolicyConfig }}' /* required */,
'{{ region }}'
RETURNING
Id,
LastModifiedTime,
OriginRequestPolicyConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: origin_request_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the origin_request_policies resource.
    - name: OriginRequestPolicyConfig
      description: |
        An origin request policy configuration. This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following: The request body and the URL path (without the domain name) from the viewer request. The headers that CloudFront automatically includes in every origin request, including Host, User-Agent, and X-Amz-Cf-Id. All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront. CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use CachePolicy.
      value:
        Comment: "{{ Comment }}"
        Name: "{{ Name }}"
        HeadersConfig:
          HeaderBehavior: "{{ HeaderBehavior }}"
          Headers:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
        CookiesConfig:
          CookieBehavior: "{{ CookieBehavior }}"
          Cookies:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
        QueryStringsConfig:
          QueryStringBehavior: "{{ QueryStringBehavior }}"
          QueryStrings:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_origin_request_policy"
    values={[
        { label: 'update_origin_request_policy', value: 'update_origin_request_policy' }
    ]}
>
<TabItem value="update_origin_request_policy">

Updates an origin request policy configuration. When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration: Use GetOriginRequestPolicyConfig to get the current configuration. Locally modify the fields in the origin request policy configuration that you want to update. Call UpdateOriginRequestPolicy by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.

```sql
UPDATE aws.cloudfront.origin_request_policies
SET 
OriginRequestPolicyConfig = '{{ OriginRequestPolicyConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND OriginRequestPolicyConfig = '{{ OriginRequestPolicyConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
Id,
LastModifiedTime,
OriginRequestPolicyConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_origin_request_policy"
    values={[
        { label: 'delete_origin_request_policy', value: 'delete_origin_request_policy' }
    ]}
>
<TabItem value="delete_origin_request_policy">

Deletes an origin request policy. You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy. To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use ListOriginRequestPolicies or GetOriginRequestPolicy.

```sql
DELETE FROM aws.cloudfront.origin_request_policies
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
