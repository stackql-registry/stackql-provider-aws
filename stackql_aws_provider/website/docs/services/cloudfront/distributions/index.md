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
    <td><a href="#associate_distribution_web_acl"><CopyableCode code="associate_distribution_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebACLArn"><code>WebACLArn</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Associates the WAF web ACL with a distribution.</td>
</tr>
<tr>
    <td><a href="#update_distribution"><CopyableCode code="update_distribution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DistributionConfig"><code>DistributionConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Updates the configuration for a CloudFront distribution. The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an UpdateDistribution request to make the updates. To update a web distribution using the CloudFront API Use GetDistributionConfig to get the current configuration, including the version identifier (ETag). Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions: You must copy the ETag field value from the response. (You'll use it for the IfMatch parameter in your request.) Then, remove the ETag field from the distribution configuration. You can't change the value of CallerReference. Submit an UpdateDistribution request, providing the updated distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an UpdateDistribution request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the primary distribution to which you are copying a staging distribution's configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="associate_distribution_web_acl"
    values={[
        { label: 'associate_distribution_web_acl', value: 'associate_distribution_web_acl' },
        { label: 'update_distribution', value: 'update_distribution' },
        { label: 'disassociate_distribution_web_acl', value: 'disassociate_distribution_web_acl' }
    ]}
>
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
    defaultValue="update_distribution_with_staging_config"
    values={[
        { label: 'update_distribution_with_staging_config', value: 'update_distribution_with_staging_config' }
    ]}
>
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
