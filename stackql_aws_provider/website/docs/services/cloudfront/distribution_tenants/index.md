--- 
title: distribution_tenants
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_tenants
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

Creates, updates, deletes, gets or lists a <code>distribution_tenants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distribution_tenants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.distribution_tenants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_distribution_tenant"
    values={[
        { label: 'get_distribution_tenant', value: 'get_distribution_tenant' },
        { label: 'list_distribution_tenants', value: 'list_distribution_tenants' }
    ]}
>
<TabItem value="get_distribution_tenant">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection group for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the distribution tenant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Customizations" /></td>
    <td><code>string</code></td>
    <td>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="DistributionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the multi-tenant distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="Domains" /></td>
    <td><code>string</code></td>
    <td>The domains associated with the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the distribution tenant was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>string</code></td>
    <td>A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains zero or more Tag elements.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distribution_tenants">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection group ID for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the distribution tenant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Customizations" /></td>
    <td><code>string</code></td>
    <td>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="DistributionId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the multi-tenant distribution. For example: EDFDVBD632BHDS5.</td>
</tr>
<tr>
    <td><CopyableCode code="Domains" /></td>
    <td><code>string</code></td>
    <td>The domains associated with the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The current version of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the distribution tenants are in an enabled state. If disabled, the distribution tenant won't service traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the distribution tenant was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the distribution tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the distribution tenant.</td>
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
    <td><a href="#get_distribution_tenant"><CopyableCode code="get_distribution_tenant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a distribution tenant.</td>
</tr>
<tr>
    <td><a href="#list_distribution_tenants"><CopyableCode code="list_distribution_tenants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the distribution tenants in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_distribution_tenant"><CopyableCode code="create_distribution_tenant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DistributionId"><code>DistributionId</code></a></td>
    <td></td>
    <td>Creates a distribution tenant.</td>
</tr>
<tr>
    <td><a href="#associate_distribution_tenant_web_acl"><CopyableCode code="associate_distribution_tenant_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebACLArn"><code>WebACLArn</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Associates the WAF web ACL with a distribution tenant.</td>
</tr>
<tr>
    <td><a href="#update_distribution_tenant"><CopyableCode code="update_distribution_tenant" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a distribution tenant.</td>
</tr>
<tr>
    <td><a href="#disassociate_distribution_tenant_web_acl"><CopyableCode code="disassociate_distribution_tenant_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Disassociates a distribution tenant from the WAF web ACL.</td>
</tr>
<tr>
    <td><a href="#delete_distribution_tenant"><CopyableCode code="delete_distribution_tenant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a distribution tenant. If you use this API operation to delete a distribution tenant that is currently enabled, the request will fail. To delete a distribution tenant, you must first disable the distribution tenant by using the UpdateDistributionTenant API operation.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The value of the ETag header that you received when retrieving the distribution tenant. This value is returned in the response of the GetDistributionTenant API operation.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the distribution tenant to delete.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the distribution tenant. You can specify the ARN, ID, or name of the distribution tenant.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current version of the distribution tenant that you're disassociating from the WAF web ACL. This is the ETag value returned in the response to the GetDistributionTenant API operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_distribution_tenant"
    values={[
        { label: 'get_distribution_tenant', value: 'get_distribution_tenant' },
        { label: 'list_distribution_tenants', value: 'list_distribution_tenants' }
    ]}
>
<TabItem value="get_distribution_tenant">

Gets information about a distribution tenant.

```sql
SELECT
Arn,
ConnectionGroupId,
CreatedTime,
Customizations,
DistributionId,
Domains,
Enabled,
Id,
LastModifiedTime,
Name,
Parameters,
Status,
Tags
FROM aws.cloudfront.distribution_tenants
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_distribution_tenants">

Lists the distribution tenants in your Amazon Web Services account.

```sql
SELECT
Arn,
ConnectionGroupId,
CreatedTime,
Customizations,
DistributionId,
Domains,
ETag,
Enabled,
Id,
LastModifiedTime,
Name,
Status
FROM aws.cloudfront.distribution_tenants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_distribution_tenant"
    values={[
        { label: 'create_distribution_tenant', value: 'create_distribution_tenant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_distribution_tenant">

Creates a distribution tenant.

```sql
INSERT INTO aws.cloudfront.distribution_tenants (
DistributionId,
Name,
Domains,
Tags,
Customizations,
Parameters,
ConnectionGroupId,
ManagedCertificateRequest,
Enabled,
region
)
SELECT 
'{{ DistributionId }}' /* required */,
'{{ Name }}',
'{{ Domains }}',
'{{ Tags }}',
'{{ Customizations }}',
'{{ Parameters }}',
'{{ ConnectionGroupId }}',
'{{ ManagedCertificateRequest }}',
{{ Enabled }},
'{{ region }}'
RETURNING
Arn,
ConnectionGroupId,
CreatedTime,
Customizations,
DistributionId,
Domains,
Enabled,
Id,
LastModifiedTime,
Name,
Parameters,
Status,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: distribution_tenants
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the distribution_tenants resource.
    - name: DistributionId
      value: "{{ DistributionId }}"
    - name: Name
      value: "{{ Name }}"
    - name: Domains
      value:
        - Domain: "{{ Domain }}"
    - name: Tags
      description: |
        A complex type that contains zero or more Tag elements.
      value:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
    - name: Customizations
      description: |
        Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
      value:
        WebAcl:
          Action: "{{ Action }}"
          Arn: "{{ Arn }}"
        Certificate:
          Arn: "{{ Arn }}"
        GeoRestrictions:
          RestrictionType: "{{ RestrictionType }}"
          Locations:
            - "{{ Locations }}"
    - name: Parameters
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
    - name: ConnectionGroupId
      value: "{{ ConnectionGroupId }}"
    - name: ManagedCertificateRequest
      description: |
        An object that represents the request for the Amazon CloudFront managed ACM certificate.
      value:
        ValidationTokenHost: "{{ ValidationTokenHost }}"
        PrimaryDomainName: "{{ PrimaryDomainName }}"
        CertificateTransparencyLoggingPreference: "{{ CertificateTransparencyLoggingPreference }}"
    - name: Enabled
      value: {{ Enabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_distribution_tenant_web_acl"
    values={[
        { label: 'associate_distribution_tenant_web_acl', value: 'associate_distribution_tenant_web_acl' },
        { label: 'update_distribution_tenant', value: 'update_distribution_tenant' },
        { label: 'disassociate_distribution_tenant_web_acl', value: 'disassociate_distribution_tenant_web_acl' }
    ]}
>
<TabItem value="associate_distribution_tenant_web_acl">

Associates the WAF web ACL with a distribution tenant.

```sql
UPDATE aws.cloudfront.distribution_tenants
SET 
WebACLArn = '{{ WebACLArn }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND WebACLArn = '{{ WebACLArn }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
ETag,
Id,
WebACLArn;
```
</TabItem>
<TabItem value="update_distribution_tenant">

Updates a distribution tenant.

```sql
UPDATE aws.cloudfront.distribution_tenants
SET 
DistributionId = '{{ DistributionId }}',
Domains = '{{ Domains }}',
Customizations = '{{ Customizations }}',
Parameters = '{{ Parameters }}',
ConnectionGroupId = '{{ ConnectionGroupId }}',
ManagedCertificateRequest = '{{ ManagedCertificateRequest }}',
Enabled = {{ Enabled }}
WHERE 
id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
ConnectionGroupId,
CreatedTime,
Customizations,
DistributionId,
Domains,
Enabled,
Id,
LastModifiedTime,
Name,
Parameters,
Status,
Tags;
```
</TabItem>
<TabItem value="disassociate_distribution_tenant_web_acl">

Disassociates a distribution tenant from the WAF web ACL.

```sql
UPDATE aws.cloudfront.distribution_tenants
SET 
-- No updatable properties
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
ETag,
Id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_distribution_tenant"
    values={[
        { label: 'delete_distribution_tenant', value: 'delete_distribution_tenant' }
    ]}
>
<TabItem value="delete_distribution_tenant">

Deletes a distribution tenant. If you use this API operation to delete a distribution tenant that is currently enabled, the request will fail. To delete a distribution tenant, you must first disable the distribution tenant by using the UpdateDistributionTenant API operation.

```sql
DELETE FROM aws.cloudfront.distribution_tenants
WHERE id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
