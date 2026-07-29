--- 
title: streaming_distributions
hide_title: false
hide_table_of_contents: false
keywords:
  - streaming_distributions
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

Creates, updates, deletes, gets or lists a <code>streaming_distributions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streaming_distributions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.streaming_distributions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_streaming_distribution"
    values={[
        { label: 'get_streaming_distribution', value: 'get_streaming_distribution' },
        { label: 'list_streaming_distributions', value: 'list_streaming_distributions' }
    ]}
>
<TabItem value="get_streaming_distribution">

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
    <td>The ARN (Amazon Resource Name) for the distribution. For example: arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5, where 123456789012 is your Amazon Web Services account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="active_trusted_signers" /></td>
    <td><code>string</code></td>
    <td>A complex type that lists the Amazon Web Services accounts, if any, that you included in the TrustedSigners complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content. The Signer complex type lists the Amazon Web Services account number of the trusted signer or self if the signer is the Amazon Web Services account that created the distribution. The Signer element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's Amazon Web Services account. If no KeyPairId element appears for a Signer, that signer can't create signed URLs. For more information, see Serving Private Content through CloudFront in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name that corresponds to the streaming distribution, for example, s5c39gqb8ow64r.cloudfront.net.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the RTMP distribution. For example: EGTXBD79EXAMPLE.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the distribution was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the RTMP distribution. When the status is Deployed, the distribution's information is propagated to all CloudFront edge locations.</td>
</tr>
<tr>
    <td><CopyableCode code="streaming_distribution_config" /></td>
    <td><code>string</code></td>
    <td>The current configuration information for the RTMP distribution.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_streaming_distributions">

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
    <td>A flag that indicates whether more streaming distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one StreamingDistributionSummary element for each distribution that was created by the current Amazon Web Services account.</td>
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
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your RTMP distributions where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of streaming distributions that were created by the current Amazon Web Services account.</td>
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
    <td><a href="#get_streaming_distribution"><CopyableCode code="get_streaming_distribution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified RTMP distribution, including the distribution configuration.</td>
</tr>
<tr>
    <td><a href="#list_streaming_distributions"><CopyableCode code="list_streaming_distributions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>List streaming distributions.</td>
</tr>
<tr>
    <td><a href="#create_streaming_distribution"><CopyableCode code="create_streaming_distribution" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamingDistributionConfig"><code>StreamingDistributionConfig</code></a></td>
    <td></td>
    <td>This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, read the announcement on the Amazon CloudFront discussion forum.</td>
</tr>
<tr>
    <td><a href="#update_streaming_distribution"><CopyableCode code="update_streaming_distribution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamingDistributionConfig"><code>StreamingDistributionConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Update a streaming distribution.</td>
</tr>
<tr>
    <td><a href="#delete_streaming_distribution"><CopyableCode code="delete_streaming_distribution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps. To delete an RTMP distribution using the CloudFront API: Disable the RTMP distribution. Submit a GET Streaming Distribution Config request to get the current configuration and the Etag header for the distribution. Update the XML document that was returned in the response to your GET Streaming Distribution Config request to change the value of Enabled to false. Submit a PUT Streaming Distribution Config request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP If-Match header to the value of the ETag header that CloudFront returned when you submitted the GET Streaming Distribution Config request in Step 2. Review the response to the PUT Streaming Distribution Config request to confirm that the distribution was successfully disabled. Submit a GET Streaming Distribution Config request to confirm that your changes have propagated. When propagation is complete, the value of Status is Deployed. Submit a DELETE Streaming Distribution request. Set the value of the HTTP If-Match header to the value of the ETag header that CloudFront returned when you submitted the GET Streaming Distribution Config request in Step 2. Review the response to your DELETE Streaming Distribution request to confirm that the distribution was successfully deleted. For information about deleting a distribution using the CloudFront console, see Deleting a Distribution in the Amazon CloudFront Developer Guide.</td>
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
    <td>The distribution ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The value of the ETag header that you received when you disabled the streaming distribution. For example: E2QWRUHAPOMQZL.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The value that you provided for the Marker request parameter.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The value that you provided for the MaxItems request parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_streaming_distribution"
    values={[
        { label: 'get_streaming_distribution', value: 'get_streaming_distribution' },
        { label: 'list_streaming_distributions', value: 'list_streaming_distributions' }
    ]}
>
<TabItem value="get_streaming_distribution">

Gets information about a specified RTMP distribution, including the distribution configuration.

```sql
SELECT
arn,
active_trusted_signers,
domain_name,
id,
last_modified_time,
status,
streaming_distribution_config
FROM aws.cloudfront.streaming_distributions
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_streaming_distributions">

List streaming distributions.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.streaming_distributions
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_streaming_distribution"
    values={[
        { label: 'create_streaming_distribution', value: 'create_streaming_distribution' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_streaming_distribution">

This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, read the announcement on the Amazon CloudFront discussion forum.

```sql
INSERT INTO aws.cloudfront.streaming_distributions (
StreamingDistributionConfig,
region
)
SELECT 
'{{ StreamingDistributionConfig }}' /* required */,
'{{ region }}'
RETURNING
arn,
active_trusted_signers,
domain_name,
id,
last_modified_time,
status,
streaming_distribution_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: streaming_distributions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the streaming_distributions resource.
    - name: StreamingDistributionConfig
      description: |
        The RTMP distribution's configuration information.
      value:
        CallerReference: "{{ CallerReference }}"
        S3Origin:
          DomainName: "{{ DomainName }}"
          OriginAccessIdentity: "{{ OriginAccessIdentity }}"
        Aliases:
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        Comment: "{{ Comment }}"
        Logging:
          Enabled: {{ Enabled }}
          Bucket: "{{ Bucket }}"
          Prefix: "{{ Prefix }}"
        TrustedSigners:
          Enabled: {{ Enabled }}
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        PriceClass: "{{ PriceClass }}"
        Enabled: {{ Enabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_streaming_distribution"
    values={[
        { label: 'update_streaming_distribution', value: 'update_streaming_distribution' }
    ]}
>
<TabItem value="update_streaming_distribution">

Update a streaming distribution.

```sql
UPDATE aws.cloudfront.streaming_distributions
SET 
StreamingDistributionConfig = '{{ StreamingDistributionConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND StreamingDistributionConfig = '{{ StreamingDistributionConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
arn,
active_trusted_signers,
domain_name,
id,
last_modified_time,
status,
streaming_distribution_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_streaming_distribution"
    values={[
        { label: 'delete_streaming_distribution', value: 'delete_streaming_distribution' }
    ]}
>
<TabItem value="delete_streaming_distribution">

Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps. To delete an RTMP distribution using the CloudFront API: Disable the RTMP distribution. Submit a GET Streaming Distribution Config request to get the current configuration and the Etag header for the distribution. Update the XML document that was returned in the response to your GET Streaming Distribution Config request to change the value of Enabled to false. Submit a PUT Streaming Distribution Config request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP If-Match header to the value of the ETag header that CloudFront returned when you submitted the GET Streaming Distribution Config request in Step 2. Review the response to the PUT Streaming Distribution Config request to confirm that the distribution was successfully disabled. Submit a GET Streaming Distribution Config request to confirm that your changes have propagated. When propagation is complete, the value of Status is Deployed. Submit a DELETE Streaming Distribution request. Set the value of the HTTP If-Match header to the value of the ETag header that CloudFront returned when you submitted the GET Streaming Distribution Config request in Step 2. Review the response to your DELETE Streaming Distribution request to confirm that the distribution was successfully deleted. For information about deleting a distribution using the CloudFront console, see Deleting a Distribution in the Amazon CloudFront Developer Guide.

```sql
DELETE FROM aws.cloudfront.streaming_distributions
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
