--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

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
    <td>A complex type that contains Tag elements.</td>
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
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Resource"><code>Resource</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List tags for a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_distribution_with_tags"><CopyableCode code="create_distribution_with_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DistributionConfigWithTags"><code>DistributionConfigWithTags</code></a></td>
    <td></td>
    <td>Create a new distribution with tags. This API operation requires the following IAM permissions: CreateDistribution TagResource</td>
</tr>
<tr>
    <td><a href="#create_streaming_distribution_with_tags"><CopyableCode code="create_streaming_distribution_with_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamingDistributionConfigWithTags"><code>StreamingDistributionConfigWithTags</code></a></td>
    <td></td>
    <td>This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, read the announcement on the Amazon CloudFront discussion forum.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-Resource"><code>Resource</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Remove tags from a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-Resource"><code>Resource</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Add tags to a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide.</td>
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
<tr id="parameter-Resource">
    <td><CopyableCode code="Resource" /></td>
    <td><code>string</code></td>
    <td>An ARN of a CloudFront resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

List tags for a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide.

```sql
SELECT
items
FROM aws.cloudfront.tags
WHERE Resource = '{{ Resource }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_distribution_with_tags"
    values={[
        { label: 'create_distribution_with_tags', value: 'create_distribution_with_tags' },
        { label: 'create_streaming_distribution_with_tags', value: 'create_streaming_distribution_with_tags' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_distribution_with_tags">

Create a new distribution with tags. This API operation requires the following IAM permissions: CreateDistribution TagResource

```sql
INSERT INTO aws.cloudfront.tags (
DistributionConfigWithTags,
region
)
SELECT 
'{{ DistributionConfigWithTags }}' /* required */,
'{{ region }}'
RETURNING
distribution,
e_tag,
location
;
```
</TabItem>
<TabItem value="create_streaming_distribution_with_tags">

This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, read the announcement on the Amazon CloudFront discussion forum.

```sql
INSERT INTO aws.cloudfront.tags (
StreamingDistributionConfigWithTags,
region
)
SELECT 
'{{ StreamingDistributionConfigWithTags }}' /* required */,
'{{ region }}'
RETURNING
e_tag,
location,
streaming_distribution
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tags resource.
    - name: DistributionConfigWithTags
      description: |
        A distribution Configuration and a list of tags to be associated with the distribution.
      value:
        DistributionConfig:
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
                  Items: "{{ Items }}"
                S3OriginConfig:
                  OriginAccessIdentity: "{{ OriginAccessIdentity }}"
                  OriginReadTimeout: {{ OriginReadTimeout }}
                CustomOriginConfig:
                  HTTPPort: {{ HTTPPort }}
                  HTTPSPort: {{ HTTPSPort }}
                  OriginProtocolPolicy: "{{ OriginProtocolPolicy }}"
                  OriginSslProtocols: "{{ OriginSslProtocols }}"
                  OriginReadTimeout: {{ OriginReadTimeout }}
                  OriginKeepaliveTimeout: {{ OriginKeepaliveTimeout }}
                  IpAddressType: "{{ IpAddressType }}"
                  OriginMtlsConfig: "{{ OriginMtlsConfig }}"
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
                  StatusCodes: "{{ StatusCodes }}"
                Members:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
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
          CacheBehaviors:
            Quantity: {{ Quantity }}
            Items:
              - PathPattern: "{{ PathPattern }}"
                TargetOriginId: "{{ TargetOriginId }}"
                TrustedSigners:
                  Enabled: {{ Enabled }}
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
                TrustedKeyGroups:
                  Enabled: {{ Enabled }}
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
                ViewerProtocolPolicy: "{{ ViewerProtocolPolicy }}"
                AllowedMethods:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
                  CachedMethods: "{{ CachedMethods }}"
                SmoothStreaming: {{ SmoothStreaming }}
                Compress: {{ Compress }}
                LambdaFunctionAssociations:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
                FunctionAssociations:
                  Quantity: {{ Quantity }}
                  Items: "{{ Items }}"
                FieldLevelEncryptionId: "{{ FieldLevelEncryptionId }}"
                RealtimeLogConfigArn: "{{ RealtimeLogConfigArn }}"
                CachePolicyId: "{{ CachePolicyId }}"
                OriginRequestPolicyId: "{{ OriginRequestPolicyId }}"
                ResponseHeadersPolicyId: "{{ ResponseHeadersPolicyId }}"
                GrpcConfig:
                  Enabled: {{ Enabled }}
                ForwardedValues:
                  QueryString: {{ QueryString }}
                  Cookies: "{{ Cookies }}"
                  Headers: "{{ Headers }}"
                  QueryStringCacheKeys: "{{ QueryStringCacheKeys }}"
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
                  StringSchema: "{{ StringSchema }}"
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
        Tags:
          Items:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
    - name: StreamingDistributionConfigWithTags
      description: |
        A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
      value:
        StreamingDistributionConfig:
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
        Tags:
          Items:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_resource"
    values={[
        { label: 'untag_resource', value: 'untag_resource' },
        { label: 'tag_resource', value: 'tag_resource' }
    ]}
>
<TabItem value="untag_resource">

Remove tags from a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide.

```sql
UPDATE aws.cloudfront.tags
SET 
TagKeys = '{{ TagKeys }}'
WHERE 
Resource = '{{ Resource }}' --required
AND region = '{{ region }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Add tags to a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide.

```sql
UPDATE aws.cloudfront.tags
SET 
Tags = '{{ Tags }}'
WHERE 
Resource = '{{ Resource }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
