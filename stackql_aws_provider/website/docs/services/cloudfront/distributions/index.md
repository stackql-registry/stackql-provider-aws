--- 
title: distributions
hide_title: false
hide_table_of_contents: false
keywords:
  - distributions
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

Creates, updates, deletes, gets or lists a <code>distributions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distributions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.distributions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_distribution"
    values={[
        { label: 'get_distribution', value: 'get_distribution' },
        { label: 'list_distributions_by_anycast_ip_list_id', value: 'list_distributions_by_anycast_ip_list_id' },
        { label: 'list_distributions_by_cache_policy_id', value: 'list_distributions_by_cache_policy_id' },
        { label: 'list_distributions_by_connection_function', value: 'list_distributions_by_connection_function' },
        { label: 'list_distributions_by_connection_mode', value: 'list_distributions_by_connection_mode' },
        { label: 'list_distributions_by_key_group', value: 'list_distributions_by_key_group' },
        { label: 'list_distributions_by_origin_request_policy_id', value: 'list_distributions_by_origin_request_policy_id' },
        { label: 'list_distributions_by_owned_resource', value: 'list_distributions_by_owned_resource' },
        { label: 'list_distributions_by_response_headers_policy_id', value: 'list_distributions_by_response_headers_policy_id' },
        { label: 'list_distributions_by_trust_store', value: 'list_distributions_by_trust_store' },
        { label: 'list_distributions_by_vpc_origin_id', value: 'list_distributions_by_vpc_origin_id' },
        { label: 'list_distributions_by_web_acl_id', value: 'list_distributions_by_web_acl_id' },
        { label: 'list_distributions', value: 'list_distributions' }
    ]}
>
<TabItem value="get_distribution">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The distribution's Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="active_trusted_key_groups" /></td>
    <td><code>string</code></td>
    <td>This field contains a list of key groups and the public keys in each key group that CloudFront can use to verify the signatures of signed URLs or signed cookies.</td>
</tr>
<tr>
    <td><CopyableCode code="active_trusted_signers" /></td>
    <td><code>string</code></td>
    <td>We recommend using TrustedKeyGroups instead of TrustedSigners. This field contains a list of Amazon Web Services account IDs and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs or signed cookies.</td>
</tr>
<tr>
    <td><CopyableCode code="alias_icp_recordals" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. For more information about ICP recordals, see Signup, Accounts, and Credentials in Getting Started with Amazon Web Services services in China.</td>
</tr>
<tr>
    <td><CopyableCode code="distribution_config" /></td>
    <td><code>string</code></td>
    <td>The distribution's configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The distribution's CloudFront domain name. For example: d111111abcdef8.cloudfront.net.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The distribution's identifier. For example: E1U5RQF7T870K0.</td>
</tr>
<tr>
    <td><CopyableCode code="in_progress_invalidation_batches" /></td>
    <td><code>integer</code></td>
    <td>The number of invalidation batches currently in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the distribution was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The distribution's status. When the status is Deployed, the distribution's information is fully propagated to all CloudFront edge locations.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_anycast_ip_list_id">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one DistributionSummary element for each distribution that was created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value you provided for the Marker request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The value you provided for the MaxItems request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of distributions that were created by the current Amazon Web Services account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_cache_policy_id">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the Marker request field to retrieve more distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Contains the distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value provided in the Marker request field.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of distribution IDs requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>Contains the value that you should use in the Marker field of a subsequent request to continue listing distribution IDs where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The total number of distribution IDs returned in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_connection_function">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one DistributionSummary element for each distribution that was created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value you provided for the Marker request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The value you provided for the MaxItems request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of distributions that were created by the current Amazon Web Services account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_connection_mode">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one DistributionSummary element for each distribution that was created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value you provided for the Marker request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The value you provided for the MaxItems request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of distributions that were created by the current Amazon Web Services account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_key_group">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the Marker request field to retrieve more distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Contains the distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value provided in the Marker request field.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of distribution IDs requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>Contains the value that you should use in the Marker field of a subsequent request to continue listing distribution IDs where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The total number of distribution IDs returned in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_origin_request_policy_id">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the Marker request field to retrieve more distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Contains the distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value provided in the Marker request field.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of distribution IDs requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>Contains the value that you should use in the Marker field of a subsequent request to continue listing distribution IDs where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The total number of distribution IDs returned in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_owned_resource">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more DistributionIdOwner objects remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>The number of DistributionIdOwner objects.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of DistributionIdOwner objects. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of DistributionIdOwner objects to return.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Specifies the actual number of DistributionIdOwner objects included in the list for the current page.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_response_headers_policy_id">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the Marker request field to retrieve more distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Contains the distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value provided in the Marker request field.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of distribution IDs requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>Contains the value that you should use in the Marker field of a subsequent request to continue listing distribution IDs where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The total number of distribution IDs returned in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_trust_store">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one DistributionSummary element for each distribution that was created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value you provided for the Marker request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The value you provided for the MaxItems request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of distributions that were created by the current Amazon Web Services account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_vpc_origin_id">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the Marker request field to retrieve more distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Contains the distribution IDs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value provided in the Marker request field.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of distribution IDs requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>Contains the value that you should use in the Marker field of a subsequent request to continue listing distribution IDs where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The total number of distribution IDs returned in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions_by_web_acl_id">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one DistributionSummary element for each distribution that was created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value you provided for the Marker request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The value you provided for the MaxItems request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of distributions that were created by the current Amazon Web Services account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distributions">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one DistributionSummary element for each distribution that was created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value you provided for the Marker request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The value you provided for the MaxItems request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of distributions that were created by the current Amazon Web Services account.</td>
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
    <td><a href="#get_distribution"><CopyableCode code="get_distribution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the information about a distribution.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_anycast_ip_list_id"><CopyableCode code="list_distributions_by_anycast_ip_list_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-anycast_ip_list_id"><code>anycast_ip_list_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the distributions in your account that are associated with the specified AnycastIpListId.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_cache_policy_id"><CopyableCode code="list_distributions_by_cache_policy_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cache_policy_id"><code>cache_policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_connection_function"><CopyableCode code="list_distributions_by_connection_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ConnectionFunctionIdentifier"><code>ConnectionFunctionIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists distributions by connection function.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_connection_mode"><CopyableCode code="list_distributions_by_connection_mode" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connection_mode"><code>connection_mode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the distributions by the connection mode that you specify.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_key_group"><CopyableCode code="list_distributions_by_key_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-key_group_id"><code>key_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_origin_request_policy_id"><CopyableCode code="list_distributions_by_origin_request_policy_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-origin_request_policy_id"><code>origin_request_policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_owned_resource"><CopyableCode code="list_distributions_by_owned_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the CloudFront distributions that are associated with the specified resource that you own.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_response_headers_policy_id"><CopyableCode code="list_distributions_by_response_headers_policy_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-response_headers_policy_id"><code>response_headers_policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_trust_store"><CopyableCode code="list_distributions_by_trust_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TrustStoreIdentifier"><code>TrustStoreIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists distributions by trust store.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_vpc_origin_id"><CopyableCode code="list_distributions_by_vpc_origin_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vpc_origin_id"><code>vpc_origin_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>List CloudFront distributions by their VPC origin ID.</td>
</tr>
<tr>
    <td><a href="#list_distributions_by_web_acl_id"><CopyableCode code="list_distributions_by_web_acl_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-web_acl_id"><code>web_acl_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>List the distributions that are associated with a specified WAF web ACL.</td>
</tr>
<tr>
    <td><a href="#list_distributions"><CopyableCode code="list_distributions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>List CloudFront distributions.</td>
</tr>
<tr>
    <td><a href="#create_distribution"><CopyableCode code="create_distribution" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DistributionConfig"><code>DistributionConfig</code></a></td>
    <td></td>
    <td>Creates a CloudFront distribution.</td>
</tr>
<tr>
    <td><a href="#update_distribution"><CopyableCode code="update_distribution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DistributionConfig"><code>DistributionConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Updates the configuration for a CloudFront distribution. The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an UpdateDistribution request to make the updates. To update a web distribution using the CloudFront API Use GetDistributionConfig to get the current configuration, including the version identifier (ETag). Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions: You must copy the ETag field value from the response. (You'll use it for the IfMatch parameter in your request.) Then, remove the ETag field from the distribution configuration. You can't change the value of CallerReference. Submit an UpdateDistribution request, providing the updated distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an UpdateDistribution request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</td>
</tr>
<tr>
    <td><a href="#associate_distribution_web_acl"><CopyableCode code="associate_distribution_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebACLArn"><code>WebACLArn</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Associates the WAF web ACL with a distribution.</td>
</tr>
<tr>
    <td><a href="#disassociate_distribution_web_acl"><CopyableCode code="disassociate_distribution_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Disassociates a distribution from the WAF web ACL.</td>
</tr>
<tr>
    <td><a href="#delete_distribution"><CopyableCode code="delete_distribution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Delete a distribution. Before you can delete a distribution, you must disable it, which requires permission to update the distribution. Once deleted, a distribution cannot be recovered.</td>
</tr>
<tr>
    <td><a href="#copy_distribution"><CopyableCode code="copy_distribution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-primary_distribution_id"><code>primary_distribution_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallerReference"><code>CallerReference</code></a></td>
    <td><a href="#parameter-Staging"><code>Staging</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow. After you create a staging distribution, you can use UpdateDistribution to modify the staging distribution's configuration. Then you can use CreateContinuousDeploymentPolicy to incrementally move traffic to the staging distribution. This API operation requires the following IAM permissions: GetDistribution CreateDistribution CopyDistribution</td>
</tr>
<tr>
    <td><a href="#update_distribution_with_staging_config"><CopyableCode code="update_distribution_with_staging_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StagingDistributionId"><code>StagingDistributionId</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its Aliases (also known as alternate domain names or CNAMEs) and ContinuousDeploymentPolicyId value, but otherwise its configuration is overwritten to match the staging distribution. You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution. This API operation requires the following IAM permissions: GetDistribution UpdateDistribution</td>
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
<tr id="parameter-ConnectionFunctionIdentifier">
    <td><CopyableCode code="ConnectionFunctionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The distributions by connection function identifier.</td>
</tr>
<tr id="parameter-TrustStoreIdentifier">
    <td><CopyableCode code="TrustStoreIdentifier" /></td>
    <td><code>string</code></td>
    <td>The distributions by trust store identifier.</td>
</tr>
<tr id="parameter-anycast_ip_list_id">
    <td><CopyableCode code="anycast_ip_list_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Anycast static IP list.</td>
</tr>
<tr id="parameter-cache_policy_id">
    <td><CopyableCode code="cache_policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the cache policy whose associated distribution IDs you want to list.</td>
</tr>
<tr id="parameter-connection_mode">
    <td><CopyableCode code="connection_mode" /></td>
    <td><code>string</code></td>
    <td>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the primary distribution to which you are copying a staging distribution's configuration.</td>
</tr>
<tr id="parameter-key_group_id">
    <td><CopyableCode code="key_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the key group whose associated distribution IDs you are listing.</td>
</tr>
<tr id="parameter-origin_request_policy_id">
    <td><CopyableCode code="origin_request_policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the origin request policy whose associated distribution IDs you want to list.</td>
</tr>
<tr id="parameter-primary_distribution_id">
    <td><CopyableCode code="primary_distribution_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the primary distribution whose configuration you are copying. To get a distribution ID, use ListDistributions.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the CloudFront resource that you've shared with other Amazon Web Services accounts.</td>
</tr>
<tr id="parameter-response_headers_policy_id">
    <td><CopyableCode code="response_headers_policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the response headers policy whose associated distribution IDs you want to list.</td>
</tr>
<tr id="parameter-vpc_origin_id">
    <td><CopyableCode code="vpc_origin_id" /></td>
    <td><code>string</code></td>
    <td>The VPC origin ID.</td>
</tr>
<tr id="parameter-web_acl_id">
    <td><CopyableCode code="web_acl_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL. For WAFV2, this is the ARN of the web ACL, such as arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. For WAF Classic, this is the ID of the web ACL, such as a1b2c3d4-5678-90ab-cdef-EXAMPLE11111.</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current versions (ETag values) of both primary and staging distributions. Provide these in the following format: &lt;primary ETag&gt;, &lt;staging ETag&gt;</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last distribution on that page).</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of distributions you want in the response body.</td>
</tr>
<tr id="parameter-Staging">
    <td><CopyableCode code="Staging" /></td>
    <td><code>boolean</code></td>
    <td>The type of distribution that your primary distribution will be copied to. The only valid value is True, indicating that you are copying to a staging distribution.</td>
</tr>
<tr id="parameter-StagingDistributionId">
    <td><CopyableCode code="StagingDistributionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the staging distribution whose configuration you are copying to the primary distribution.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_distribution"
    values={[
        { label: 'get_distribution', value: 'get_distribution' },
        { label: 'list_distributions_by_anycast_ip_list_id', value: 'list_distributions_by_anycast_ip_list_id' },
        { label: 'list_distributions_by_cache_policy_id', value: 'list_distributions_by_cache_policy_id' },
        { label: 'list_distributions_by_connection_function', value: 'list_distributions_by_connection_function' },
        { label: 'list_distributions_by_connection_mode', value: 'list_distributions_by_connection_mode' },
        { label: 'list_distributions_by_key_group', value: 'list_distributions_by_key_group' },
        { label: 'list_distributions_by_origin_request_policy_id', value: 'list_distributions_by_origin_request_policy_id' },
        { label: 'list_distributions_by_owned_resource', value: 'list_distributions_by_owned_resource' },
        { label: 'list_distributions_by_response_headers_policy_id', value: 'list_distributions_by_response_headers_policy_id' },
        { label: 'list_distributions_by_trust_store', value: 'list_distributions_by_trust_store' },
        { label: 'list_distributions_by_vpc_origin_id', value: 'list_distributions_by_vpc_origin_id' },
        { label: 'list_distributions_by_web_acl_id', value: 'list_distributions_by_web_acl_id' },
        { label: 'list_distributions', value: 'list_distributions' }
    ]}
>
<TabItem value="get_distribution">

Get the information about a distribution.

```sql
SELECT
arn,
active_trusted_key_groups,
active_trusted_signers,
alias_icp_recordals,
distribution_config,
domain_name,
id,
in_progress_invalidation_batches,
last_modified_time,
status
FROM aws.cloudfront.distributions
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_distributions_by_anycast_ip_list_id">

Lists the distributions in your account that are associated with the specified AnycastIpListId.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE anycast_ip_list_id = '{{ anycast_ip_list_id }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_cache_policy_id">

Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE cache_policy_id = '{{ cache_policy_id }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_connection_function">

Lists distributions by connection function.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE ConnectionFunctionIdentifier = '{{ ConnectionFunctionIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_connection_mode">

Lists the distributions by the connection mode that you specify.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE connection_mode = '{{ connection_mode }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_key_group">

Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE key_group_id = '{{ key_group_id }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_origin_request_policy_id">

Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE origin_request_policy_id = '{{ origin_request_policy_id }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_owned_resource">

Lists the CloudFront distributions that are associated with the specified resource that you own.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_response_headers_policy_id">

Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE response_headers_policy_id = '{{ response_headers_policy_id }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_trust_store">

Lists distributions by trust store.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE TrustStoreIdentifier = '{{ TrustStoreIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_vpc_origin_id">

List CloudFront distributions by their VPC origin ID.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE vpc_origin_id = '{{ vpc_origin_id }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions_by_web_acl_id">

List the distributions that are associated with a specified WAF web ACL.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE web_acl_id = '{{ web_acl_id }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_distributions">

List CloudFront distributions.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.distributions
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_distribution"
    values={[
        { label: 'create_distribution', value: 'create_distribution' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_distribution">

Creates a CloudFront distribution.

```sql
INSERT INTO aws.cloudfront.distributions (
DistributionConfig,
region
)
SELECT 
'{{ DistributionConfig }}' /* required */,
'{{ region }}'
RETURNING
arn,
active_trusted_key_groups,
active_trusted_signers,
alias_icp_recordals,
distribution_config,
domain_name,
id,
in_progress_invalidation_batches,
last_modified_time,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: distributions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the distributions resource.
    - name: DistributionConfig
      description: |
        A distribution configuration.
      value:
        CallerReference: "{{ CallerReference }}"
        Aliases:
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        DefaultRootObject: "{{ DefaultRootObject }}"
        Origins:
          Quantity: {{ Quantity }}
          Items:
            - Id: "{{ Id }}"
              DomainName: "{{ DomainName }}"
              OriginPath: "{{ OriginPath }}"
              CustomHeaders:
                Quantity: {{ Quantity }}
                Items:
                  - HeaderName: "{{ HeaderName }}"
                    HeaderValue: "{{ HeaderValue }}"
              S3OriginConfig:
                OriginAccessIdentity: "{{ OriginAccessIdentity }}"
                OriginReadTimeout: {{ OriginReadTimeout }}
              CustomOriginConfig:
                HTTPPort: {{ HTTPPort }}
                HTTPSPort: {{ HTTPSPort }}
                OriginProtocolPolicy: "{{ OriginProtocolPolicy }}"
                OriginSslProtocols:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
                OriginReadTimeout: {{ OriginReadTimeout }}
                OriginKeepaliveTimeout: {{ OriginKeepaliveTimeout }}
                IpAddressType: "{{ IpAddressType }}"
                OriginMtlsConfig:
                  ClientCertificateArn: "{{ ClientCertificateArn }}"
              VpcOriginConfig:
                VpcOriginId: "{{ VpcOriginId }}"
                OwnerAccountId: "{{ OwnerAccountId }}"
                OriginReadTimeout: {{ OriginReadTimeout }}
                OriginKeepaliveTimeout: {{ OriginKeepaliveTimeout }}
              ConnectionAttempts: {{ ConnectionAttempts }}
              ConnectionTimeout: {{ ConnectionTimeout }}
              ResponseCompletionTimeout: {{ ResponseCompletionTimeout }}
              OriginShield:
                Enabled: {{ Enabled }}
                OriginShieldRegion: "{{ OriginShieldRegion }}"
              OriginAccessControlId: "{{ OriginAccessControlId }}"
        OriginGroups:
          Quantity: {{ Quantity }}
          Items:
            - Id: "{{ Id }}"
              FailoverCriteria:
                StatusCodes:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
              Members:
                Quantity: {{ Quantity }}
                Items:
                  - OriginId: "{{ OriginId }}"
              SelectionCriteria: "{{ SelectionCriteria }}"
        DefaultCacheBehavior:
          TargetOriginId: "{{ TargetOriginId }}"
          TrustedSigners:
            Enabled: {{ Enabled }}
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
          TrustedKeyGroups:
            Enabled: {{ Enabled }}
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
          ViewerProtocolPolicy: "{{ ViewerProtocolPolicy }}"
          AllowedMethods:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
            CachedMethods:
              Quantity: {{ Quantity }}
              Items:
                - "{{ Items }}"
          SmoothStreaming: {{ SmoothStreaming }}
          Compress: {{ Compress }}
          LambdaFunctionAssociations:
            Quantity: {{ Quantity }}
            Items:
              - LambdaFunctionARN: "{{ LambdaFunctionARN }}"
                EventType: "{{ EventType }}"
                IncludeBody: {{ IncludeBody }}
          FunctionAssociations:
            Quantity: {{ Quantity }}
            Items:
              - FunctionARN: "{{ FunctionARN }}"
                EventType: "{{ EventType }}"
          FieldLevelEncryptionId: "{{ FieldLevelEncryptionId }}"
          RealtimeLogConfigArn: "{{ RealtimeLogConfigArn }}"
          CachePolicyId: "{{ CachePolicyId }}"
          OriginRequestPolicyId: "{{ OriginRequestPolicyId }}"
          ResponseHeadersPolicyId: "{{ ResponseHeadersPolicyId }}"
          GrpcConfig:
            Enabled: {{ Enabled }}
          ForwardedValues:
            QueryString: {{ QueryString }}
            Cookies:
              Forward: "{{ Forward }}"
              WhitelistedNames:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
            Headers:
              Quantity: {{ Quantity }}
              Items:
                - "{{ Items }}"
            QueryStringCacheKeys:
              Quantity: {{ Quantity }}
              Items:
                - "{{ Items }}"
          MinTTL: {{ MinTTL }}
          DefaultTTL: {{ DefaultTTL }}
          MaxTTL: {{ MaxTTL }}
        CacheBehaviors:
          Quantity: {{ Quantity }}
          Items:
            - PathPattern: "{{ PathPattern }}"
              TargetOriginId: "{{ TargetOriginId }}"
              TrustedSigners:
                Enabled: {{ Enabled }}
                Quantity: {{ Quantity }}
                Items:
                  - "{{ Items }}"
              TrustedKeyGroups:
                Enabled: {{ Enabled }}
                Quantity: {{ Quantity }}
                Items:
                  - "{{ Items }}"
              ViewerProtocolPolicy: "{{ ViewerProtocolPolicy }}"
              AllowedMethods:
                Quantity: {{ Quantity }}
                Items:
                  - "{{ Items }}"
                CachedMethods:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
              SmoothStreaming: {{ SmoothStreaming }}
              Compress: {{ Compress }}
              LambdaFunctionAssociations:
                Quantity: {{ Quantity }}
                Items:
                  - LambdaFunctionARN: "{{ LambdaFunctionARN }}"
                    EventType: "{{ EventType }}"
                    IncludeBody: {{ IncludeBody }}
              FunctionAssociations:
                Quantity: {{ Quantity }}
                Items:
                  - FunctionARN: "{{ FunctionARN }}"
                    EventType: "{{ EventType }}"
              FieldLevelEncryptionId: "{{ FieldLevelEncryptionId }}"
              RealtimeLogConfigArn: "{{ RealtimeLogConfigArn }}"
              CachePolicyId: "{{ CachePolicyId }}"
              OriginRequestPolicyId: "{{ OriginRequestPolicyId }}"
              ResponseHeadersPolicyId: "{{ ResponseHeadersPolicyId }}"
              GrpcConfig:
                Enabled: {{ Enabled }}
              ForwardedValues:
                QueryString: {{ QueryString }}
                Cookies:
                  Forward: "{{ Forward }}"
                  WhitelistedNames: "{{ WhitelistedNames }}"
                Headers:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
                QueryStringCacheKeys:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
              MinTTL: {{ MinTTL }}
              DefaultTTL: {{ DefaultTTL }}
              MaxTTL: {{ MaxTTL }}
        CustomErrorResponses:
          Quantity: {{ Quantity }}
          Items:
            - ErrorCode: {{ ErrorCode }}
              ResponsePagePath: "{{ ResponsePagePath }}"
              ResponseCode: "{{ ResponseCode }}"
              ErrorCachingMinTTL: {{ ErrorCachingMinTTL }}
        Comment: "{{ Comment }}"
        Logging:
          Enabled: {{ Enabled }}
          IncludeCookies: {{ IncludeCookies }}
          Bucket: "{{ Bucket }}"
          Prefix: "{{ Prefix }}"
        PriceClass: "{{ PriceClass }}"
        Enabled: {{ Enabled }}
        ViewerCertificate:
          CloudFrontDefaultCertificate: {{ CloudFrontDefaultCertificate }}
          IAMCertificateId: "{{ IAMCertificateId }}"
          ACMCertificateArn: "{{ ACMCertificateArn }}"
          SSLSupportMethod: "{{ SSLSupportMethod }}"
          MinimumProtocolVersion: "{{ MinimumProtocolVersion }}"
          Certificate: "{{ Certificate }}"
          CertificateSource: "{{ CertificateSource }}"
        Restrictions:
          GeoRestriction:
            RestrictionType: "{{ RestrictionType }}"
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
        WebACLId: "{{ WebACLId }}"
        HttpVersion: "{{ HttpVersion }}"
        IsIPV6Enabled: {{ IsIPV6Enabled }}
        ContinuousDeploymentPolicyId: "{{ ContinuousDeploymentPolicyId }}"
        Staging: {{ Staging }}
        AnycastIpListId: "{{ AnycastIpListId }}"
        TenantConfig:
          ParameterDefinitions:
            - Name: "{{ Name }}"
              Definition:
                StringSchema:
                  Comment: "{{ Comment }}"
                  DefaultValue: "{{ DefaultValue }}"
                  Required: {{ Required }}
        ConnectionMode: "{{ ConnectionMode }}"
        ViewerMtlsConfig:
          Mode: "{{ Mode }}"
          TrustStoreConfig:
            TrustStoreId: "{{ TrustStoreId }}"
            AdvertiseTrustStoreCaNames: {{ AdvertiseTrustStoreCaNames }}
            IgnoreCertificateExpiry: {{ IgnoreCertificateExpiry }}
        ConnectionFunctionAssociation:
          Id: "{{ Id }}"
        CacheTagConfig:
          HeaderName: "{{ HeaderName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_distribution"
    values={[
        { label: 'update_distribution', value: 'update_distribution' },
        { label: 'associate_distribution_web_acl', value: 'associate_distribution_web_acl' },
        { label: 'disassociate_distribution_web_acl', value: 'disassociate_distribution_web_acl' }
    ]}
>
<TabItem value="update_distribution">

Updates the configuration for a CloudFront distribution. The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an UpdateDistribution request to make the updates. To update a web distribution using the CloudFront API Use GetDistributionConfig to get the current configuration, including the version identifier (ETag). Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions: You must copy the ETag field value from the response. (You'll use it for the IfMatch parameter in your request.) Then, remove the ETag field from the distribution configuration. You can't change the value of CallerReference. Submit an UpdateDistribution request, providing the updated distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an UpdateDistribution request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.

```sql
UPDATE aws.cloudfront.distributions
SET 
DistributionConfig = '{{ DistributionConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND DistributionConfig = '{{ DistributionConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
arn,
active_trusted_key_groups,
active_trusted_signers,
alias_icp_recordals,
distribution_config,
domain_name,
id,
in_progress_invalidation_batches,
last_modified_time,
status;
```
</TabItem>
<TabItem value="associate_distribution_web_acl">

Associates the WAF web ACL with a distribution.

```sql
UPDATE aws.cloudfront.distributions
SET 
WebACLArn = '{{ WebACLArn }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND WebACLArn = '{{ WebACLArn }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
e_tag,
id,
web_acl_arn;
```
</TabItem>
<TabItem value="disassociate_distribution_web_acl">

Disassociates a distribution from the WAF web ACL.

```sql
UPDATE aws.cloudfront.distributions
SET 
-- No updatable properties
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
e_tag,
id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_distribution"
    values={[
        { label: 'delete_distribution', value: 'delete_distribution' }
    ]}
>
<TabItem value="delete_distribution">

Delete a distribution. Before you can delete a distribution, you must disable it, which requires permission to update the distribution. Once deleted, a distribution cannot be recovered.

```sql
DELETE FROM aws.cloudfront.distributions
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_distribution"
    values={[
        { label: 'copy_distribution', value: 'copy_distribution' },
        { label: 'update_distribution_with_staging_config', value: 'update_distribution_with_staging_config' }
    ]}
>
<TabItem value="copy_distribution">

Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow. After you create a staging distribution, you can use UpdateDistribution to modify the staging distribution's configuration. Then you can use CreateContinuousDeploymentPolicy to incrementally move traffic to the staging distribution. This API operation requires the following IAM permissions: GetDistribution CreateDistribution CopyDistribution

```sql
EXEC aws.cloudfront.distributions.copy_distribution 
@primary_distribution_id='{{ primary_distribution_id }}' --required, 
@region='{{ region }}' --required, 
@Staging={{ Staging }}, 
@If-Match='{{ If-Match }}' 
@@json=
'{
"CallerReference": "{{ CallerReference }}", 
"Enabled": {{ Enabled }}
}'
;
```
</TabItem>
<TabItem value="update_distribution_with_staging_config">

Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its Aliases (also known as alternate domain names or CNAMEs) and ContinuousDeploymentPolicyId value, but otherwise its configuration is overwritten to match the staging distribution. You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution. This API operation requires the following IAM permissions: GetDistribution UpdateDistribution

```sql
EXEC aws.cloudfront.distributions.update_distribution_with_staging_config 
@id='{{ id }}' --required, 
@region='{{ region }}' --required, 
@StagingDistributionId='{{ StagingDistributionId }}', 
@If-Match='{{ If-Match }}'
;
```
</TabItem>
</Tabs>
