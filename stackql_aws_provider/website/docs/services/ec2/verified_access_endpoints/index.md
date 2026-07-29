--- 
title: verified_access_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_endpoints
  - ec2
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

Creates, updates, deletes, gets or lists a <code>verified_access_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_access_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.verified_access_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_verified_access_endpoints"
    values={[
        { label: 'describe_verified_access_endpoints', value: 'describe_verified_access_endpoints' }
    ]}
>
<TabItem value="describe_verified_access_endpoints">

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
    <td><CopyableCode code="application_domain" /></td>
    <td><code>string</code></td>
    <td>The DNS name for users to reach your application.</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_type" /></td>
    <td><code>string</code></td>
    <td>The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the application.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_options" /></td>
    <td><code>string</code></td>
    <td>The options for a CIDR endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_time" /></td>
    <td><code>string</code></td>
    <td>The deletion time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the Amazon Web Services Verified Access endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="device_validation_domain" /></td>
    <td><code>string</code></td>
    <td>Returned if endpoint has a device trust provider attached.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a public TLS/SSL certificate imported into or created with ACM.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_domain" /></td>
    <td><code>string</code></td>
    <td>A DNS name that is generated for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string</code></td>
    <td>The last updated time.</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancer_options" /></td>
    <td><code>string</code></td>
    <td>The load balancer details if creating the Amazon Web Services Verified Access endpoint as load-balancertype.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_options" /></td>
    <td><code>string</code></td>
    <td>The options for network-interface type endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="rds_options" /></td>
    <td><code>string</code></td>
    <td>The options for an RDS endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>string</code></td>
    <td>The IDs of the security groups for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="sse_specification" /></td>
    <td><code>string</code></td>
    <td>The options in use for server side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The endpoint status.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_access_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Verified Access endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_access_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Verified Access group.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_access_instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Verified Access instance.</td>
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
    <td><a href="#describe_verified_access_endpoints"><CopyableCode code="describe_verified_access_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VerifiedAccessEndpointId"><code>VerifiedAccessEndpointId</code></a>, <a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-VerifiedAccessGroupId"><code>VerifiedAccessGroupId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified Amazon Web Services Verified Access endpoints.</td>
</tr>
<tr>
    <td><a href="#create_verified_access_endpoint"><CopyableCode code="create_verified_access_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VerifiedAccessGroupId"><code>VerifiedAccessGroupId</code></a>, <a href="#parameter-EndpointType"><code>EndpointType</code></a>, <a href="#parameter-AttachmentType"><code>AttachmentType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DomainCertificateArn"><code>DomainCertificateArn</code></a>, <a href="#parameter-ApplicationDomain"><code>ApplicationDomain</code></a>, <a href="#parameter-EndpointDomainPrefix"><code>EndpointDomainPrefix</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-LoadBalancerOptions"><code>LoadBalancerOptions</code></a>, <a href="#parameter-NetworkInterfaceOptions"><code>NetworkInterfaceOptions</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SseSpecification"><code>SseSpecification</code></a>, <a href="#parameter-RdsOptions"><code>RdsOptions</code></a>, <a href="#parameter-CidrOptions"><code>CidrOptions</code></a></td>
    <td>An Amazon Web Services Verified Access endpoint is where you define your application along with an optional endpoint-level access policy.</td>
</tr>
<tr>
    <td><a href="#modify_verified_access_endpoint"><CopyableCode code="modify_verified_access_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VerifiedAccessEndpointId"><code>VerifiedAccessEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VerifiedAccessGroupId"><code>VerifiedAccessGroupId</code></a>, <a href="#parameter-LoadBalancerOptions"><code>LoadBalancerOptions</code></a>, <a href="#parameter-NetworkInterfaceOptions"><code>NetworkInterfaceOptions</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-RdsOptions"><code>RdsOptions</code></a>, <a href="#parameter-CidrOptions"><code>CidrOptions</code></a></td>
    <td>Modifies the configuration of the specified Amazon Web Services Verified Access endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_verified_access_endpoint"><CopyableCode code="delete_verified_access_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VerifiedAccessEndpointId"><code>VerifiedAccessEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Delete an Amazon Web Services Verified Access endpoint.</td>
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
<tr id="parameter-AttachmentType">
    <td><CopyableCode code="AttachmentType" /></td>
    <td><code>string</code></td>
    <td>The type of attachment.</td>
</tr>
<tr id="parameter-EndpointType">
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of Verified Access endpoint to create.</td>
</tr>
<tr id="parameter-VerifiedAccessEndpointId">
    <td><CopyableCode code="VerifiedAccessEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access endpoint.</td>
</tr>
<tr id="parameter-VerifiedAccessGroupId">
    <td><CopyableCode code="VerifiedAccessGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access group to associate the endpoint with.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplicationDomain">
    <td><CopyableCode code="ApplicationDomain" /></td>
    <td><code>string</code></td>
    <td>The DNS name for users to reach your application.</td>
</tr>
<tr id="parameter-CidrOptions">
    <td><CopyableCode code="CidrOptions" /></td>
    <td><code>object</code></td>
    <td>The CIDR options.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the Verified Access endpoint.</td>
</tr>
<tr id="parameter-DomainCertificateArn">
    <td><CopyableCode code="DomainCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the public TLS/SSL certificate in Amazon Web Services Certificate Manager to associate with the endpoint. The CN in the certificate must match the DNS name your end users will use to reach your application.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EndpointDomainPrefix">
    <td><CopyableCode code="EndpointDomainPrefix" /></td>
    <td><code>string</code></td>
    <td>A custom identifier that is prepended to the DNS name that is generated for the endpoint.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive.</td>
</tr>
<tr id="parameter-LoadBalancerOptions">
    <td><CopyableCode code="LoadBalancerOptions" /></td>
    <td><code>object</code></td>
    <td>The load balancer details if creating the Verified Access endpoint as load-balancertype.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkInterfaceOptions">
    <td><CopyableCode code="NetworkInterfaceOptions" /></td>
    <td><code>object</code></td>
    <td>The network interface options.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-PolicyDocument">
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The Verified Access policy document.</td>
</tr>
<tr id="parameter-RdsOptions">
    <td><CopyableCode code="RdsOptions" /></td>
    <td><code>object</code></td>
    <td>The RDS options.</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups to associate with the Verified Access endpoint. Required if AttachmentType is set to vpc.</td>
</tr>
<tr id="parameter-SseSpecification">
    <td><CopyableCode code="SseSpecification" /></td>
    <td><code>object</code></td>
    <td>The options for server side encryption.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the Verified Access endpoint.</td>
</tr>
<tr id="parameter-VerifiedAccessEndpointId">
    <td><CopyableCode code="VerifiedAccessEndpointId" /></td>
    <td><code>array</code></td>
    <td>The ID of the Verified Access endpoint.</td>
</tr>
<tr id="parameter-VerifiedAccessGroupId">
    <td><CopyableCode code="VerifiedAccessGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access group.</td>
</tr>
<tr id="parameter-VerifiedAccessInstanceId">
    <td><CopyableCode code="VerifiedAccessInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access instance.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_verified_access_endpoints"
    values={[
        { label: 'describe_verified_access_endpoints', value: 'describe_verified_access_endpoints' }
    ]}
>
<TabItem value="describe_verified_access_endpoints">

Describes the specified Amazon Web Services Verified Access endpoints.

```sql
SELECT
application_domain,
attachment_type,
cidr_options,
creation_time,
deletion_time,
description,
device_validation_domain,
domain_certificate_arn,
endpoint_domain,
endpoint_type,
last_updated_time,
load_balancer_options,
network_interface_options,
rds_options,
security_group_ids,
sse_specification,
status,
tags,
verified_access_endpoint_id,
verified_access_group_id,
verified_access_instance_id
FROM aws.ec2.verified_access_endpoints
WHERE region = '{{ region }}' -- required
AND VerifiedAccessEndpointId = '{{ VerifiedAccessEndpointId }}'
AND VerifiedAccessInstanceId = '{{ VerifiedAccessInstanceId }}'
AND VerifiedAccessGroupId = '{{ VerifiedAccessGroupId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_verified_access_endpoint"
    values={[
        { label: 'create_verified_access_endpoint', value: 'create_verified_access_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_verified_access_endpoint">

An Amazon Web Services Verified Access endpoint is where you define your application along with an optional endpoint-level access policy.

```sql
INSERT INTO aws.ec2.verified_access_endpoints (
VerifiedAccessGroupId,
EndpointType,
AttachmentType,
region,
DomainCertificateArn,
ApplicationDomain,
EndpointDomainPrefix,
SecurityGroupId,
LoadBalancerOptions,
NetworkInterfaceOptions,
Description,
PolicyDocument,
TagSpecification,
ClientToken,
DryRun,
SseSpecification,
RdsOptions,
CidrOptions
)
SELECT 
'{{ VerifiedAccessGroupId }}',
'{{ EndpointType }}',
'{{ AttachmentType }}',
'{{ region }}',
'{{ DomainCertificateArn }}',
'{{ ApplicationDomain }}',
'{{ EndpointDomainPrefix }}',
'{{ SecurityGroupId }}',
'{{ LoadBalancerOptions }}',
'{{ NetworkInterfaceOptions }}',
'{{ Description }}',
'{{ PolicyDocument }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ SseSpecification }}',
'{{ RdsOptions }}',
'{{ CidrOptions }}'
RETURNING
application_domain,
attachment_type,
cidr_options,
creation_time,
deletion_time,
description,
device_validation_domain,
domain_certificate_arn,
endpoint_domain,
endpoint_type,
last_updated_time,
load_balancer_options,
network_interface_options,
rds_options,
security_group_ids,
sse_specification,
status,
tags,
verified_access_endpoint_id,
verified_access_group_id,
verified_access_instance_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: verified_access_endpoints
  props:
    - name: VerifiedAccessGroupId
      value: "{{ VerifiedAccessGroupId }}"
      description: Required parameter for the verified_access_endpoints resource.
    - name: EndpointType
      value: "{{ EndpointType }}"
      description: Required parameter for the verified_access_endpoints resource.
    - name: AttachmentType
      value: "{{ AttachmentType }}"
      description: Required parameter for the verified_access_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the verified_access_endpoints resource.
    - name: DomainCertificateArn
      value: "{{ DomainCertificateArn }}"
      description: The ARN of the public TLS/SSL certificate in Amazon Web Services Certificate Manager to associate with the endpoint. The CN in the certificate must match the DNS name your end users will use to reach your application.
      description: The ARN of the public TLS/SSL certificate in Amazon Web Services Certificate Manager to associate with the endpoint. The CN in the certificate must match the DNS name your end users will use to reach your application.
    - name: ApplicationDomain
      value: "{{ ApplicationDomain }}"
      description: The DNS name for users to reach your application.
      description: The DNS name for users to reach your application.
    - name: EndpointDomainPrefix
      value: "{{ EndpointDomainPrefix }}"
      description: A custom identifier that is prepended to the DNS name that is generated for the endpoint.
      description: A custom identifier that is prepended to the DNS name that is generated for the endpoint.
    - name: SecurityGroupId
      value: "{{ SecurityGroupId }}"
      description: The IDs of the security groups to associate with the Verified Access endpoint. Required if AttachmentType is set to vpc.
      description: The IDs of the security groups to associate with the Verified Access endpoint. Required if AttachmentType is set to vpc.
    - name: LoadBalancerOptions
      value: "{{ LoadBalancerOptions }}"
      description: The load balancer details. This parameter is required if the endpoint type is load-balancer.
      description: The load balancer details. This parameter is required if the endpoint type is load-balancer.
    - name: NetworkInterfaceOptions
      value: "{{ NetworkInterfaceOptions }}"
      description: The network interface details. This parameter is required if the endpoint type is network-interface.
      description: The network interface details. This parameter is required if the endpoint type is network-interface.
    - name: Description
      value: "{{ Description }}"
      description: A description for the Verified Access endpoint.
      description: A description for the Verified Access endpoint.
    - name: PolicyDocument
      value: "{{ PolicyDocument }}"
      description: The Verified Access policy document.
      description: The Verified Access policy document.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the Verified Access endpoint.
      description: The tags to assign to the Verified Access endpoint.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: SseSpecification
      value: "{{ SseSpecification }}"
      description: The options for server side encryption.
      description: The options for server side encryption.
    - name: RdsOptions
      value: "{{ RdsOptions }}"
      description: The RDS details. This parameter is required if the endpoint type is rds.
      description: The RDS details. This parameter is required if the endpoint type is rds.
    - name: CidrOptions
      value: "{{ CidrOptions }}"
      description: The CIDR options. This parameter is required if the endpoint type is cidr.
      description: The CIDR options. This parameter is required if the endpoint type is cidr.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_verified_access_endpoint"
    values={[
        { label: 'modify_verified_access_endpoint', value: 'modify_verified_access_endpoint' }
    ]}
>
<TabItem value="modify_verified_access_endpoint">

Modifies the configuration of the specified Amazon Web Services Verified Access endpoint.

```sql
UPDATE aws.ec2.verified_access_endpoints
SET 
-- No updatable properties
WHERE 
VerifiedAccessEndpointId = '{{ VerifiedAccessEndpointId }}' --required
AND region = '{{ region }}' --required
AND VerifiedAccessGroupId = '{{ VerifiedAccessGroupId}}'
AND LoadBalancerOptions = '{{ LoadBalancerOptions}}'
AND NetworkInterfaceOptions = '{{ NetworkInterfaceOptions}}'
AND Description = '{{ Description}}'
AND ClientToken = '{{ ClientToken}}'
AND DryRun = {{ DryRun}}
AND RdsOptions = '{{ RdsOptions}}'
AND CidrOptions = '{{ CidrOptions}}'
RETURNING
application_domain,
attachment_type,
cidr_options,
creation_time,
deletion_time,
description,
device_validation_domain,
domain_certificate_arn,
endpoint_domain,
endpoint_type,
last_updated_time,
load_balancer_options,
network_interface_options,
rds_options,
security_group_ids,
sse_specification,
status,
tags,
verified_access_endpoint_id,
verified_access_group_id,
verified_access_instance_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_verified_access_endpoint"
    values={[
        { label: 'delete_verified_access_endpoint', value: 'delete_verified_access_endpoint' }
    ]}
>
<TabItem value="delete_verified_access_endpoint">

Delete an Amazon Web Services Verified Access endpoint.

```sql
DELETE FROM aws.ec2.verified_access_endpoints
WHERE VerifiedAccessEndpointId = '{{ VerifiedAccessEndpointId }}' --required
AND region = '{{ region }}' --required
AND ClientToken = '{{ ClientToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
