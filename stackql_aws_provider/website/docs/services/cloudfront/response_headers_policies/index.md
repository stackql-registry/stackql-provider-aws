--- 
title: response_headers_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - response_headers_policies
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

Creates, updates, deletes, gets or lists a <code>response_headers_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="response_headers_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.response_headers_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_response_headers_policy"
    values={[
        { label: 'get_response_headers_policy', value: 'get_response_headers_policy' },
        { label: 'list_response_headers_policies', value: 'list_response_headers_policies' }
    ]}
>
<TabItem value="get_response_headers_policy">

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
    <td>The identifier for the response headers policy.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the response headers policy was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="response_headers_policy_config" /></td>
    <td><code>string</code></td>
    <td>A response headers policy configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_response_headers_policies">

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
    <td>The response headers policies in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response headers policies requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the Marker field of a subsequent request to continue listing response headers policies where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of response headers policies returned.</td>
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
    <td><a href="#get_response_headers_policy"><CopyableCode code="get_response_headers_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified). To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the response headers policy is not attached to a cache behavior, you can get the identifier using ListResponseHeadersPolicies.</td>
</tr>
<tr>
    <td><a href="#list_response_headers_policies"><CopyableCode code="list_response_headers_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of response headers policies. You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#create_response_headers_policy"><CopyableCode code="create_response_headers_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResponseHeadersPolicyConfig"><code>ResponseHeadersPolicyConfig</code></a></td>
    <td></td>
    <td>Creates a response headers policy. A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers. After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy. For more information, see Adding or removing HTTP headers in CloudFront responses in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_response_headers_policy"><CopyableCode code="update_response_headers_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResponseHeadersPolicyConfig"><code>ResponseHeadersPolicyConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Updates a response headers policy. When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration: Use GetResponseHeadersPolicyConfig to get the current policy's configuration. Modify the fields in the response headers policy configuration that you want to update. Call UpdateResponseHeadersPolicy, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</td>
</tr>
<tr>
    <td><a href="#delete_response_headers_policy"><CopyableCode code="delete_response_headers_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Deletes a response headers policy. You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy. To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use ListResponseHeadersPolicies or GetResponseHeadersPolicy.</td>
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
    <td>The identifier for the response headers policy that you are deleting. To get the identifier, you can use ListResponseHeadersPolicies.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The version of the response headers policy that you are deleting. The version is the response headers policy's ETag value, which you can get using ListResponseHeadersPolicies, GetResponseHeadersPolicy, or GetResponseHeadersPolicyConfig.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of response headers policies that you want to get in the response.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>A filter to get only the specified kind of response headers policies. Valid values are: managed – Gets only the managed policies created by Amazon Web Services. custom – Gets only the custom policies created in your Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_response_headers_policy"
    values={[
        { label: 'get_response_headers_policy', value: 'get_response_headers_policy' },
        { label: 'list_response_headers_policies', value: 'list_response_headers_policies' }
    ]}
>
<TabItem value="get_response_headers_policy">

Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified). To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the response headers policy is not attached to a cache behavior, you can get the identifier using ListResponseHeadersPolicies.

```sql
SELECT
id,
last_modified_time,
response_headers_policy_config
FROM aws.cloudfront.response_headers_policies
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_response_headers_policies">

Gets a list of response headers policies. You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
items,
max_items,
next_marker,
quantity
FROM aws.cloudfront.response_headers_policies
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
    defaultValue="create_response_headers_policy"
    values={[
        { label: 'create_response_headers_policy', value: 'create_response_headers_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_response_headers_policy">

Creates a response headers policy. A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers. After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy. For more information, see Adding or removing HTTP headers in CloudFront responses in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.response_headers_policies (
ResponseHeadersPolicyConfig,
region
)
SELECT 
'{{ ResponseHeadersPolicyConfig }}' /* required */,
'{{ region }}'
RETURNING
id,
last_modified_time,
response_headers_policy_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: response_headers_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the response_headers_policies resource.
    - name: ResponseHeadersPolicyConfig
      description: |
        A response headers policy configuration. A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.
      value:
        Comment: "{{ Comment }}"
        Name: "{{ Name }}"
        CorsConfig:
          AccessControlAllowOrigins:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
          AccessControlAllowHeaders:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
          AccessControlAllowMethods:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
          AccessControlAllowCredentials: {{ AccessControlAllowCredentials }}
          AccessControlExposeHeaders:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
          AccessControlMaxAgeSec: {{ AccessControlMaxAgeSec }}
          OriginOverride: {{ OriginOverride }}
        SecurityHeadersConfig:
          XSSProtection:
            Override: {{ Override }}
            Protection: {{ Protection }}
            ModeBlock: {{ ModeBlock }}
            ReportUri: "{{ ReportUri }}"
          FrameOptions:
            Override: {{ Override }}
            FrameOption: "{{ FrameOption }}"
          ReferrerPolicy:
            Override: {{ Override }}
            ReferrerPolicy: "{{ ReferrerPolicy }}"
          ContentSecurityPolicy:
            Override: {{ Override }}
            ContentSecurityPolicy: "{{ ContentSecurityPolicy }}"
          ContentTypeOptions:
            Override: {{ Override }}
          StrictTransportSecurity:
            Override: {{ Override }}
            IncludeSubdomains: {{ IncludeSubdomains }}
            Preload: {{ Preload }}
            AccessControlMaxAgeSec: {{ AccessControlMaxAgeSec }}
        ServerTimingHeadersConfig:
          Enabled: {{ Enabled }}
          SamplingRate: {{ SamplingRate }}
        CustomHeadersConfig:
          Quantity: {{ Quantity }}
          Items:
            - Header: "{{ Header }}"
              Value: "{{ Value }}"
              Override: {{ Override }}
        RemoveHeadersConfig:
          Quantity: {{ Quantity }}
          Items:
            - Header: "{{ Header }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_response_headers_policy"
    values={[
        { label: 'update_response_headers_policy', value: 'update_response_headers_policy' }
    ]}
>
<TabItem value="update_response_headers_policy">

Updates a response headers policy. When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration: Use GetResponseHeadersPolicyConfig to get the current policy's configuration. Modify the fields in the response headers policy configuration that you want to update. Call UpdateResponseHeadersPolicy, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.

```sql
UPDATE aws.cloudfront.response_headers_policies
SET 
ResponseHeadersPolicyConfig = '{{ ResponseHeadersPolicyConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND ResponseHeadersPolicyConfig = '{{ ResponseHeadersPolicyConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
id,
last_modified_time,
response_headers_policy_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_response_headers_policy"
    values={[
        { label: 'delete_response_headers_policy', value: 'delete_response_headers_policy' }
    ]}
>
<TabItem value="delete_response_headers_policy">

Deletes a response headers policy. You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy. To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use ListResponseHeadersPolicies or GetResponseHeadersPolicy.

```sql
DELETE FROM aws.cloudfront.response_headers_policies
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
