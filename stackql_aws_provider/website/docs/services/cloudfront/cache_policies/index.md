--- 
title: cache_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_policies
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

Creates, updates, deletes, gets or lists a <code>cache_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.cache_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cache_policy"
    values={[
        { label: 'get_cache_policy', value: 'get_cache_policy' },
        { label: 'list_cache_policies', value: 'list_cache_policies' }
    ]}
>
<TabItem value="get_cache_policy">

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
    <td><CopyableCode code="cache_policy_config" /></td>
    <td><code>string</code></td>
    <td>The cache policy configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the cache policy.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the cache policy was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cache_policies">

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
    <td>Contains the cache policies in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of cache policies requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the Marker field of a subsequent request to continue listing cache policies where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The total number of cache policies returned in the response.</td>
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
    <td><a href="#get_cache_policy"><CopyableCode code="get_cache_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a cache policy, including the following metadata: The policy's identifier. The date and time when the policy was last modified. To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the cache policy is not attached to a cache behavior, you can get the identifier using ListCachePolicies.</td>
</tr>
<tr>
    <td><a href="#list_cache_policies"><CopyableCode code="list_cache_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of cache policies. You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#create_cache_policy"><CopyableCode code="create_cache_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CachePolicyConfig"><code>CachePolicyConfig</code></a></td>
    <td></td>
    <td>Creates a cache policy. After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following: The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer. The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache. If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the Cache-Control: no-cache, no-store, or private directives are present in the origin headers. The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but not include them in the cache key, use OriginRequestPolicy. For more information about cache policies, see Controlling the cache key in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_cache_policy"><CopyableCode code="update_cache_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CachePolicyConfig"><code>CachePolicyConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Updates a cache policy configuration. When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration: Use GetCachePolicyConfig to get the current configuration. Locally modify the fields in the cache policy configuration that you want to update. Call UpdateCachePolicy by providing the entire cache policy configuration, including the fields that you modified and those that you didn't. If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the Cache-Control: no-cache, no-store, or private directives are present in the origin headers.</td>
</tr>
<tr>
    <td><a href="#delete_cache_policy"><CopyableCode code="delete_cache_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Deletes a cache policy. You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy. To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use ListCachePolicies or GetCachePolicy.</td>
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
    <td>The unique identifier for the cache policy that you are deleting. To get the identifier, you can use ListCachePolicies.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The version of the cache policy that you are deleting. The version is the cache policy's ETag value, which you can get using ListCachePolicies, GetCachePolicy, or GetCachePolicyConfig.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of cache policies that you want in the response.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>A filter to return only the specified kinds of cache policies. Valid values are: managed – Returns only the managed policies created by Amazon Web Services. custom – Returns only the custom policies created in your Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cache_policy"
    values={[
        { label: 'get_cache_policy', value: 'get_cache_policy' },
        { label: 'list_cache_policies', value: 'list_cache_policies' }
    ]}
>
<TabItem value="get_cache_policy">

Gets a cache policy, including the following metadata: The policy's identifier. The date and time when the policy was last modified. To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the cache policy is not attached to a cache behavior, you can get the identifier using ListCachePolicies.

```sql
SELECT
cache_policy_config,
id,
last_modified_time
FROM aws.cloudfront.cache_policies
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cache_policies">

Gets a list of cache policies. You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
items,
max_items,
next_marker,
quantity
FROM aws.cloudfront.cache_policies
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
    defaultValue="create_cache_policy"
    values={[
        { label: 'create_cache_policy', value: 'create_cache_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cache_policy">

Creates a cache policy. After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following: The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer. The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache. If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the Cache-Control: no-cache, no-store, or private directives are present in the origin headers. The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but not include them in the cache key, use OriginRequestPolicy. For more information about cache policies, see Controlling the cache key in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.cache_policies (
CachePolicyConfig,
region
)
SELECT 
'{{ CachePolicyConfig }}' /* required */,
'{{ region }}'
RETURNING
cache_policy_config,
id,
last_modified_time
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cache_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cache_policies resource.
    - name: CachePolicyConfig
      description: |
        A cache policy configuration. This configuration determines the following: The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer. The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache. If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the Cache-Control: no-cache, no-store, or private directives are present in the origin headers. The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but not include them in the cache key, use OriginRequestPolicy.
      value:
        Comment: "{{ Comment }}"
        Name: "{{ Name }}"
        DefaultTTL: {{ DefaultTTL }}
        MaxTTL: {{ MaxTTL }}
        MinTTL: {{ MinTTL }}
        ParametersInCacheKeyAndForwardedToOrigin:
          EnableAcceptEncodingGzip: {{ EnableAcceptEncodingGzip }}
          EnableAcceptEncodingBrotli: {{ EnableAcceptEncodingBrotli }}
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
    defaultValue="update_cache_policy"
    values={[
        { label: 'update_cache_policy', value: 'update_cache_policy' }
    ]}
>
<TabItem value="update_cache_policy">

Updates a cache policy configuration. When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration: Use GetCachePolicyConfig to get the current configuration. Locally modify the fields in the cache policy configuration that you want to update. Call UpdateCachePolicy by providing the entire cache policy configuration, including the fields that you modified and those that you didn't. If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the Cache-Control: no-cache, no-store, or private directives are present in the origin headers.

```sql
UPDATE aws.cloudfront.cache_policies
SET 
CachePolicyConfig = '{{ CachePolicyConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND CachePolicyConfig = '{{ CachePolicyConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
cache_policy_config,
id,
last_modified_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cache_policy"
    values={[
        { label: 'delete_cache_policy', value: 'delete_cache_policy' }
    ]}
>
<TabItem value="delete_cache_policy">

Deletes a cache policy. You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy. To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use ListCachePolicies or GetCachePolicy.

```sql
DELETE FROM aws.cloudfront.cache_policies
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
