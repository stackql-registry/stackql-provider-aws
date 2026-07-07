--- 
title: domain_names
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_names
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>domain_names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.domain_names" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_name"
    values={[
        { label: 'get_domain_name', value: 'get_domain_name' },
        { label: 'get_domain_names', value: 'get_domain_names' }
    ]}
>
<TabItem value="get_domain_name">

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
    <td><CopyableCode code="certificateArn" /></td>
    <td><code>string</code></td>
    <td>The reference to an Amazon Web Services-managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name. Certificate Manager is the only supported source.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateName" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate that will be used by edge-optimized endpoint or private endpoint for this domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateUploadDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the certificate that was used by edge-optimized endpoint or private endpoint for this domain name was uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionDomainName" /></td>
    <td><code>string</code></td>
    <td>The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the Amazon CloudFront documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionHostedZoneId" /></td>
    <td><code>string</code></td>
    <td>The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is Z2FDTNDATAQYW2 for all the regions. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name as an API host name, for example, my-api.example.com.</td>
</tr>
<tr>
    <td><CopyableCode code="domainNameArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="domainNameId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the domain name resource. Supported only for private custom domain names.</td>
</tr>
<tr>
    <td><CopyableCode code="domainNameStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the DomainName migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. (AVAILABLE, UPDATING, PENDING, PENDING_CERTIFICATE_REIMPORT, PENDING_OWNERSHIP_VERIFICATION, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="domainNameStatusMessage" /></td>
    <td><code>string</code></td>
    <td>An optional text message containing detailed information about status of the DomainName migration.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointAccessMode" /></td>
    <td><code>string</code></td>
    <td>The endpoint access mode of the DomainName. (BASIC, STRICT)</td>
</tr>
<tr>
    <td><CopyableCode code="endpointConfiguration" /></td>
    <td><code>object</code></td>
    <td>The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has and the IP address types that can invoke it.</td>
</tr>
<tr>
    <td><CopyableCode code="managementPolicy" /></td>
    <td><code>string</code></td>
    <td>A stringified JSON policy document that applies to the API Gateway Management service for this DomainName. This policy document controls access for access association sources to create domain name access associations with this DomainName. Supported only for private custom domain names.</td>
</tr>
<tr>
    <td><CopyableCode code="mutualTlsAuthentication" /></td>
    <td><code>object</code></td>
    <td>The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.</td>
</tr>
<tr>
    <td><CopyableCode code="ownershipVerificationCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>A stringified JSON policy document that applies to the execute-api service for this DomainName regardless of the caller and Method configuration. Supported only for private custom domain names.</td>
</tr>
<tr>
    <td><CopyableCode code="regionalCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The reference to an Amazon Web Services-managed certificate that will be used for validating the regional domain name. Certificate Manager is the only supported source.</td>
</tr>
<tr>
    <td><CopyableCode code="regionalCertificateName" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate that will be used for validating the regional domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="regionalDomainName" /></td>
    <td><code>string</code></td>
    <td>The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="regionalHostedZoneId" /></td>
    <td><code>string</code></td>
    <td>The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="routingMode" /></td>
    <td><code>string</code></td>
    <td>The routing mode for this domain name. The routing mode determines how API Gateway sends traffic from your custom domain name to your private APIs. (BASE_PATH_MAPPING_ONLY, ROUTING_RULE_ONLY, ROUTING_RULE_THEN_BASE_PATH_MAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="securityPolicy" /></td>
    <td><code>string</code></td>
    <td>The Transport Layer Security (TLS) version + cipher suite for this DomainName. (TLS_1_0, TLS_1_2, SecurityPolicy_TLS13_1_3_2025_09, SecurityPolicy_TLS13_1_3_FIPS_2025_09, SecurityPolicy_TLS13_1_2_PFS_PQ_2025_09, SecurityPolicy_TLS13_1_2_FIPS_PQ_2025_09, SecurityPolicy_TLS13_1_2_FIPS_PFS_PQ_2025_09, SecurityPolicy_TLS13_1_2_PQ_2025_09, SecurityPolicy_TLS13_1_2_2021_06, SecurityPolicy_TLS13_2025_EDGE, SecurityPolicy_TLS12_PFS_2025_EDGE, SecurityPolicy_TLS12_2018_EDGE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_domain_names">

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
    <td><CopyableCode code="certificateArn" /></td>
    <td><code>string</code></td>
    <td>The reference to an Amazon Web Services-managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name. Certificate Manager is the only supported source.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateName" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate that will be used by edge-optimized endpoint or private endpoint for this domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateUploadDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the certificate that was used by edge-optimized endpoint or private endpoint for this domain name was uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionDomainName" /></td>
    <td><code>string</code></td>
    <td>The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the Amazon CloudFront documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionHostedZoneId" /></td>
    <td><code>string</code></td>
    <td>The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is Z2FDTNDATAQYW2 for all the regions. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name as an API host name, for example, my-api.example.com.</td>
</tr>
<tr>
    <td><CopyableCode code="domainNameArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="domainNameId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the domain name resource. Supported only for private custom domain names.</td>
</tr>
<tr>
    <td><CopyableCode code="domainNameStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the DomainName migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. (AVAILABLE, UPDATING, PENDING, PENDING_CERTIFICATE_REIMPORT, PENDING_OWNERSHIP_VERIFICATION, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="domainNameStatusMessage" /></td>
    <td><code>string</code></td>
    <td>An optional text message containing detailed information about status of the DomainName migration.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointAccessMode" /></td>
    <td><code>string</code></td>
    <td>The endpoint access mode of the DomainName. (BASIC, STRICT)</td>
</tr>
<tr>
    <td><CopyableCode code="endpointConfiguration" /></td>
    <td><code>object</code></td>
    <td>The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has and the IP address types that can invoke it.</td>
</tr>
<tr>
    <td><CopyableCode code="managementPolicy" /></td>
    <td><code>string</code></td>
    <td>A stringified JSON policy document that applies to the API Gateway Management service for this DomainName. This policy document controls access for access association sources to create domain name access associations with this DomainName. Supported only for private custom domain names.</td>
</tr>
<tr>
    <td><CopyableCode code="mutualTlsAuthentication" /></td>
    <td><code>object</code></td>
    <td>The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.</td>
</tr>
<tr>
    <td><CopyableCode code="ownershipVerificationCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>A stringified JSON policy document that applies to the execute-api service for this DomainName regardless of the caller and Method configuration. Supported only for private custom domain names.</td>
</tr>
<tr>
    <td><CopyableCode code="regionalCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The reference to an Amazon Web Services-managed certificate that will be used for validating the regional domain name. Certificate Manager is the only supported source.</td>
</tr>
<tr>
    <td><CopyableCode code="regionalCertificateName" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate that will be used for validating the regional domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="regionalDomainName" /></td>
    <td><code>string</code></td>
    <td>The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="regionalHostedZoneId" /></td>
    <td><code>string</code></td>
    <td>The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="routingMode" /></td>
    <td><code>string</code></td>
    <td>The routing mode for this domain name. The routing mode determines how API Gateway sends traffic from your custom domain name to your private APIs. (BASE_PATH_MAPPING_ONLY, ROUTING_RULE_ONLY, ROUTING_RULE_THEN_BASE_PATH_MAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="securityPolicy" /></td>
    <td><code>string</code></td>
    <td>The Transport Layer Security (TLS) version + cipher suite for this DomainName. (TLS_1_0, TLS_1_2, SecurityPolicy_TLS13_1_3_2025_09, SecurityPolicy_TLS13_1_3_FIPS_2025_09, SecurityPolicy_TLS13_1_2_PFS_PQ_2025_09, SecurityPolicy_TLS13_1_2_FIPS_PQ_2025_09, SecurityPolicy_TLS13_1_2_FIPS_PFS_PQ_2025_09, SecurityPolicy_TLS13_1_2_PQ_2025_09, SecurityPolicy_TLS13_1_2_2021_06, SecurityPolicy_TLS13_2025_EDGE, SecurityPolicy_TLS12_PFS_2025_EDGE, SecurityPolicy_TLS12_2018_EDGE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
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
    <td><a href="#get_domain_name"><CopyableCode code="get_domain_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Represents a domain name that is contained in a simpler, more intuitive URL that can be called.</td>
</tr>
<tr>
    <td><a href="#get_domain_names"><CopyableCode code="get_domain_names" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-resourceOwner"><code>resourceOwner</code></a></td>
    <td>Represents a collection of DomainName resources.</td>
</tr>
<tr>
    <td><a href="#create_domain_name"><CopyableCode code="create_domain_name" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainName"><code>domainName</code></a></td>
    <td></td>
    <td>Creates a new domain name.</td>
</tr>
<tr>
    <td><a href="#update_domain_name"><CopyableCode code="update_domain_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Changes information about the DomainName resource.</td>
</tr>
<tr>
    <td><a href="#delete_domain_name"><CopyableCode code="delete_domain_name" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Deletes the DomainName resource.</td>
</tr>
<tr>
    <td><a href="#reject_domain_name_access_association"><CopyableCode code="reject_domain_name_access_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainNameAccessAssociationArn"><code>domainNameAccessAssociationArn</code></a>, <a href="#parameter-domainNameArn"><code>domainNameArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Rejects a domain name access association with a private custom domain name. To reject a domain name access association with an access association source in another AWS account, use this operation. To remove a domain name access association with an access association source in your own account, use the DeleteDomainNameAccessAssociation operation.</td>
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
<tr id="parameter-domainNameAccessAssociationArn">
    <td><CopyableCode code="domainNameAccessAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the domain name access association resource.</td>
</tr>
<tr id="parameter-domainNameArn">
    <td><CopyableCode code="domainNameArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the domain name.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the DomainName resource to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domainNameId">
    <td><CopyableCode code="domainNameId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the domain name resource. Supported only for private custom domain names.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
<tr id="parameter-resourceOwner">
    <td><CopyableCode code="resourceOwner" /></td>
    <td><code>string</code></td>
    <td>The owner of the domain name access association.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_name"
    values={[
        { label: 'get_domain_name', value: 'get_domain_name' },
        { label: 'get_domain_names', value: 'get_domain_names' }
    ]}
>
<TabItem value="get_domain_name">

Represents a domain name that is contained in a simpler, more intuitive URL that can be called.

```sql
SELECT
certificateArn,
certificateName,
certificateUploadDate,
distributionDomainName,
distributionHostedZoneId,
domainName,
domainNameArn,
domainNameId,
domainNameStatus,
domainNameStatusMessage,
endpointAccessMode,
endpointConfiguration,
managementPolicy,
mutualTlsAuthentication,
ownershipVerificationCertificateArn,
policy,
regionalCertificateArn,
regionalCertificateName,
regionalDomainName,
regionalHostedZoneId,
routingMode,
securityPolicy,
tags
FROM aws.apigateway.domain_names
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND domainNameId = '{{ domainNameId }}'
;
```
</TabItem>
<TabItem value="get_domain_names">

Represents a collection of DomainName resources.

```sql
SELECT
certificateArn,
certificateName,
certificateUploadDate,
distributionDomainName,
distributionHostedZoneId,
domainName,
domainNameArn,
domainNameId,
domainNameStatus,
domainNameStatusMessage,
endpointAccessMode,
endpointConfiguration,
managementPolicy,
mutualTlsAuthentication,
ownershipVerificationCertificateArn,
policy,
regionalCertificateArn,
regionalCertificateName,
regionalDomainName,
regionalHostedZoneId,
routingMode,
securityPolicy,
tags
FROM aws.apigateway.domain_names
WHERE region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
AND resourceOwner = '{{ resourceOwner }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain_name"
    values={[
        { label: 'create_domain_name', value: 'create_domain_name' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain_name">

Creates a new domain name.

```sql
INSERT INTO aws.apigateway.domain_names (
domainName,
certificateName,
certificateBody,
certificatePrivateKey,
certificateChain,
certificateArn,
regionalCertificateName,
regionalCertificateArn,
endpointConfiguration,
tags,
securityPolicy,
endpointAccessMode,
mutualTlsAuthentication,
ownershipVerificationCertificateArn,
policy,
routingMode,
region
)
SELECT 
'{{ domainName }}' /* required */,
'{{ certificateName }}',
'{{ certificateBody }}',
'{{ certificatePrivateKey }}',
'{{ certificateChain }}',
'{{ certificateArn }}',
'{{ regionalCertificateName }}',
'{{ regionalCertificateArn }}',
'{{ endpointConfiguration }}',
'{{ tags }}',
'{{ securityPolicy }}',
'{{ endpointAccessMode }}',
'{{ mutualTlsAuthentication }}',
'{{ ownershipVerificationCertificateArn }}',
'{{ policy }}',
'{{ routingMode }}',
'{{ region }}'
RETURNING
certificateArn,
certificateName,
certificateUploadDate,
distributionDomainName,
distributionHostedZoneId,
domainName,
domainNameArn,
domainNameId,
domainNameStatus,
domainNameStatusMessage,
endpointAccessMode,
endpointConfiguration,
managementPolicy,
mutualTlsAuthentication,
ownershipVerificationCertificateArn,
policy,
regionalCertificateArn,
regionalCertificateName,
regionalDomainName,
regionalHostedZoneId,
routingMode,
securityPolicy,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_names
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domain_names resource.
    - name: domainName
      value: "{{ domainName }}"
    - name: certificateName
      value: "{{ certificateName }}"
    - name: certificateBody
      value: "{{ certificateBody }}"
    - name: certificatePrivateKey
      value: "{{ certificatePrivateKey }}"
    - name: certificateChain
      value: "{{ certificateChain }}"
    - name: certificateArn
      value: "{{ certificateArn }}"
    - name: regionalCertificateName
      value: "{{ regionalCertificateName }}"
    - name: regionalCertificateArn
      value: "{{ regionalCertificateArn }}"
    - name: endpointConfiguration
      description: |
        The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has and the IP address types that can invoke it.
      value:
        types:
          - "{{ types }}"
        ipAddressType: "{{ ipAddressType }}"
        vpcEndpointIds:
          - "{{ vpcEndpointIds }}"
    - name: tags
      value: "{{ tags }}"
    - name: securityPolicy
      value: "{{ securityPolicy }}"
      valid_values: ['TLS_1_0', 'TLS_1_2', 'SecurityPolicy_TLS13_1_3_2025_09', 'SecurityPolicy_TLS13_1_3_FIPS_2025_09', 'SecurityPolicy_TLS13_1_2_PFS_PQ_2025_09', 'SecurityPolicy_TLS13_1_2_FIPS_PQ_2025_09', 'SecurityPolicy_TLS13_1_2_FIPS_PFS_PQ_2025_09', 'SecurityPolicy_TLS13_1_2_PQ_2025_09', 'SecurityPolicy_TLS13_1_2_2021_06', 'SecurityPolicy_TLS13_2025_EDGE', 'SecurityPolicy_TLS12_PFS_2025_EDGE', 'SecurityPolicy_TLS12_2018_EDGE']
    - name: endpointAccessMode
      value: "{{ endpointAccessMode }}"
      valid_values: ['BASIC', 'STRICT']
    - name: mutualTlsAuthentication
      description: |
        The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
      value:
        truststoreUri: "{{ truststoreUri }}"
        truststoreVersion: "{{ truststoreVersion }}"
    - name: ownershipVerificationCertificateArn
      value: "{{ ownershipVerificationCertificateArn }}"
    - name: policy
      value: "{{ policy }}"
    - name: routingMode
      value: "{{ routingMode }}"
      valid_values: ['BASE_PATH_MAPPING_ONLY', 'ROUTING_RULE_ONLY', 'ROUTING_RULE_THEN_BASE_PATH_MAPPING']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_name"
    values={[
        { label: 'update_domain_name', value: 'update_domain_name' }
    ]}
>
<TabItem value="update_domain_name">

Changes information about the DomainName resource.

```sql
UPDATE aws.apigateway.domain_names
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND domainNameId = '{{ domainNameId}}'
RETURNING
certificateArn,
certificateName,
certificateUploadDate,
distributionDomainName,
distributionHostedZoneId,
domainName,
domainNameArn,
domainNameId,
domainNameStatus,
domainNameStatusMessage,
endpointAccessMode,
endpointConfiguration,
managementPolicy,
mutualTlsAuthentication,
ownershipVerificationCertificateArn,
policy,
regionalCertificateArn,
regionalCertificateName,
regionalDomainName,
regionalHostedZoneId,
routingMode,
securityPolicy,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_name"
    values={[
        { label: 'delete_domain_name', value: 'delete_domain_name' }
    ]}
>
<TabItem value="delete_domain_name">

Deletes the DomainName resource.

```sql
DELETE FROM aws.apigateway.domain_names
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND domainNameId = '{{ domainNameId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reject_domain_name_access_association"
    values={[
        { label: 'reject_domain_name_access_association', value: 'reject_domain_name_access_association' }
    ]}
>
<TabItem value="reject_domain_name_access_association">

Rejects a domain name access association with a private custom domain name. To reject a domain name access association with an access association source in another AWS account, use this operation. To remove a domain name access association with an access association source in your own account, use the DeleteDomainNameAccessAssociation operation.

```sql
EXEC aws.apigateway.domain_names.reject_domain_name_access_association 
@domainNameAccessAssociationArn='{{ domainNameAccessAssociationArn }}' --required, 
@domainNameArn='{{ domainNameArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
