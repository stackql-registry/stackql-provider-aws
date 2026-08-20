--- 
title: certificate_authorities
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_authorities
  - eks
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

Creates, updates, deletes, gets or lists a <code>certificate_authorities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_authorities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.certificate_authorities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_certificate_authority"
    values={[
        { label: 'describe_certificate_authority', value: 'describe_certificate_authority' },
        { label: 'list_certificate_authorities', value: 'list_certificate_authorities' }
    ]}
>
<TabItem value="describe_certificate_authority">

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
    <td>The unique identifier of the certificate authority.</td>
</tr>
<tr>
    <td><CopyableCode code="activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the certificate authority was last activated as the cluster's signer. This value is absent if the certificate authority has never been activated.</td>
</tr>
<tr>
    <td><CopyableCode code="activated_by" /></td>
    <td><code>string</code></td>
    <td>The entity that most recently activated the certificate authority. A value of EKS indicates that Amazon EKS activated it automatically; CUSTOMER indicates that you activated it. (EKS, CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the certificate authority was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The entity that created the certificate authority. Certificate authorities that you create are CUSTOMER; those that Amazon EKS provisions on your behalf, such as a cluster's initial certificate authority, are EKS. (EKS, CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string</code></td>
    <td>The Base64-encoded public certificate of the certificate authority.</td>
</tr>
<tr>
    <td><CopyableCode code="distribution_status" /></td>
    <td><code>string</code></td>
    <td>The distribution status of the certificate authority, which tracks whether Amazon EKS has distributed its trust to the Amazon Web Services managed components in your cluster (the control plane, Amazon EKS Auto Mode instances, and Amazon Web Services Fargate nodes). Valid values are IN_PROGRESS, COMPLETE, FAILED, and DELETING. A successor CA can only be activated after its distribution status is COMPLETE. (IN_PROGRESS, COMPLETE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="rollback_available" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether CA rollback is still available for this certificate authority. After you activate a successor CA, rollback lets you revert to the outgoing CA for a limited period while you finish updating any worker nodes or clients that were missed.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_events" /></td>
    <td><code>object</code></td>
    <td>The scheduled auto-activation events for the certificate authority, computed from its validity period.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_status" /></td>
    <td><code>string</code></td>
    <td>The signing status of the certificate authority. IN_USE means the certificate authority is currently signing certificates for the cluster, ACTIVATING means it's being promoted to the signer, and NOT_USED means it's trusted by the cluster (for example, a successor CA during a rotation, or a retired outgoing CA) but isn't the signer. (NOT_USED, ACTIVATING, IN_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>object</code></td>
    <td>The validity period of the certificate authority's certificate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_certificate_authorities">

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
    <td>The unique identifier of the certificate authority.</td>
</tr>
<tr>
    <td><CopyableCode code="activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the certificate authority was last activated. This value is absent if the certificate authority has never been activated.</td>
</tr>
<tr>
    <td><CopyableCode code="activated_by" /></td>
    <td><code>string</code></td>
    <td>The entity that most recently activated the certificate authority, either CUSTOMER or EKS. (EKS, CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the certificate authority was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The entity that created the certificate authority, either CUSTOMER or EKS. (EKS, CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="distribution_status" /></td>
    <td><code>string</code></td>
    <td>The distribution status of the certificate authority: IN_PROGRESS, COMPLETE, FAILED, or DELETING. (IN_PROGRESS, COMPLETE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="signing_status" /></td>
    <td><code>string</code></td>
    <td>The signing status of the certificate authority: IN_USE, ACTIVATING, or NOT_USED. (NOT_USED, ACTIVATING, IN_USE)</td>
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
    <td><a href="#describe_certificate_authority"><CopyableCode code="describe_certificate_authority" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a certificate authority (CA) in your cluster, including its validity period, signing and distribution status, provenance, scheduled auto-activation events, and public certificate data.</td>
</tr>
<tr>
    <td><a href="#list_certificate_authorities"><CopyableCode code="list_certificate_authorities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the certificate authorities (CAs) for your cluster. A cluster has at most two certificate authorities: the outgoing CA that's currently signing and, during a rotation, one successor CA.</td>
</tr>
<tr>
    <td><a href="#create_certificate_authority"><CopyableCode code="create_certificate_authority" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Appends a successor certificate authority (CA) to your cluster, beginning the CA rotation process. A cluster certificate authority is the root of trust for your cluster's control plane. It signs the certificates that secure communication between the Kubernetes API server and its clients, and its public certificate is distributed to your cluster's trust bundle so that worker nodes and clients can verify the API server's identity. Each cluster can have at most two certificate authorities at a time: the outgoing CA that's currently signing (its signingStatus is IN_USE) and one successor CA (signingStatus of NOT_USED) that you can later activate to complete the rotation. Appending a successor CA adds its public certificate to the cluster's trust bundle so that the cluster trusts both CAs simultaneously (the dual trust period), but it doesn't begin signing certificates. Amazon EKS then distributes the successor CA to the Amazon Web Services managed components in your cluster; you can track this through the CA's distributionStatus. The successor CA can't be activated until its distributionStatus is COMPLETE. To activate it as the cluster's signer, use ActivateCertificateAuthority . This is an asynchronous operation that returns an update object. If you don't append a successor CA yourself, Amazon EKS appends one automatically before the outgoing CA approaches expiration. For more information, see Rotate the Amazon EKS cluster certificate authority in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_certificate_authority"><CopyableCode code="delete_certificate_authority" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientRequestToken"><code>clientRequestToken</code></a></td>
    <td>Deletes a certificate authority (CA) from your cluster. Deleting a certificate authority removes its public certificate from the cluster's trust bundle. You can't delete the certificate authority that's currently signing certificates for the cluster (its signingStatus is IN_USE) — to remove the outgoing CA, first activate the successor CA with ActivateCertificateAuthority . Amazon EKS also protects a successor CA from deletion in certain cases to keep a valid rotation path — for example, a successor that Amazon EKS appended can't be deleted while it's the only successor on the cluster. This is an asynchronous operation that returns an update object.</td>
</tr>
<tr>
    <td><a href="#activate_certificate_authority"><CopyableCode code="activate_certificate_authority" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Activates a successor certificate authority (CA) as the signing certificate authority for your cluster, completing a CA rotation. When you activate a successor CA, Amazon EKS promotes it to be the cluster's signer (its signingStatus becomes IN_USE) and the outgoing CA is retired (NOT_USED). The outgoing CA remains in the cluster's trust bundle but no longer signs certificates. The successor CA you activate must already be present on the cluster and fully distributed (its distributionStatus must be COMPLETE). This is an asynchronous operation that returns an update object you can track with DescribeUpdate . Before you activate the successor CA, make sure the worker nodes you manage and your external clients have been updated to trust it, so they maintain connectivity to the API server after activation. For a limited period after activation, CA rollback is available to revert to the outgoing CA if needed. If you don't activate the successor CA yourself, Amazon EKS activates it automatically as the expiration deadline approaches. For more information, see Rotate the Amazon EKS cluster certificate authority in the Amazon EKS User Guide.</td>
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
<tr id="parameter-certificate_authority_id">
    <td><CopyableCode code="certificate_authority_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the certificate authority to activate as the cluster's signing certificate authority. This certificate authority must already exist on the cluster and have a distributionStatus of COMPLETE.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientRequestToken">
    <td><CopyableCode code="clientRequestToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you don't specify a value, the default is 100 results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_certificate_authority"
    values={[
        { label: 'describe_certificate_authority', value: 'describe_certificate_authority' },
        { label: 'list_certificate_authorities', value: 'list_certificate_authorities' }
    ]}
>
<TabItem value="describe_certificate_authority">

Returns detailed information about a certificate authority (CA) in your cluster, including its validity period, signing and distribution status, provenance, scheduled auto-activation events, and public certificate data.

```sql
SELECT
id,
activated_at,
activated_by,
created_at,
created_by,
data,
distribution_status,
rollback_available,
scheduled_events,
signing_status,
validity
FROM aws.eks.certificate_authorities
WHERE name = '{{ name }}' -- required
AND certificate_authority_id = '{{ certificate_authority_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_certificate_authorities">

Lists the certificate authorities (CAs) for your cluster. A cluster has at most two certificate authorities: the outgoing CA that's currently signing and, during a rotation, one successor CA.

```sql
SELECT
id,
activated_at,
activated_by,
created_at,
created_by,
distribution_status,
signing_status
FROM aws.eks.certificate_authorities
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_certificate_authority"
    values={[
        { label: 'create_certificate_authority', value: 'create_certificate_authority' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_certificate_authority">

Appends a successor certificate authority (CA) to your cluster, beginning the CA rotation process. A cluster certificate authority is the root of trust for your cluster's control plane. It signs the certificates that secure communication between the Kubernetes API server and its clients, and its public certificate is distributed to your cluster's trust bundle so that worker nodes and clients can verify the API server's identity. Each cluster can have at most two certificate authorities at a time: the outgoing CA that's currently signing (its signingStatus is IN_USE) and one successor CA (signingStatus of NOT_USED) that you can later activate to complete the rotation. Appending a successor CA adds its public certificate to the cluster's trust bundle so that the cluster trusts both CAs simultaneously (the dual trust period), but it doesn't begin signing certificates. Amazon EKS then distributes the successor CA to the Amazon Web Services managed components in your cluster; you can track this through the CA's distributionStatus. The successor CA can't be activated until its distributionStatus is COMPLETE. To activate it as the cluster's signer, use ActivateCertificateAuthority . This is an asynchronous operation that returns an update object. If you don't append a successor CA yourself, Amazon EKS appends one automatically before the outgoing CA approaches expiration. For more information, see Rotate the Amazon EKS cluster certificate authority in the Amazon EKS User Guide.

```sql
INSERT INTO aws.eks.certificate_authorities (
clientRequestToken,
name,
region
)
SELECT 
'{{ clientRequestToken }}',
'{{ name }}',
'{{ region }}'
RETURNING
certificate_authority,
update
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: certificate_authorities
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the certificate_authorities resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the certificate_authorities resource.
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_certificate_authority"
    values={[
        { label: 'delete_certificate_authority', value: 'delete_certificate_authority' }
    ]}
>
<TabItem value="delete_certificate_authority">

Deletes a certificate authority (CA) from your cluster. Deleting a certificate authority removes its public certificate from the cluster's trust bundle. You can't delete the certificate authority that's currently signing certificates for the cluster (its signingStatus is IN_USE) — to remove the outgoing CA, first activate the successor CA with ActivateCertificateAuthority . Amazon EKS also protects a successor CA from deletion in certain cases to keep a valid rotation path — for example, a successor that Amazon EKS appended can't be deleted while it's the only successor on the cluster. This is an asynchronous operation that returns an update object.

```sql
DELETE FROM aws.eks.certificate_authorities
WHERE name = '{{ name }}' --required
AND certificate_authority_id = '{{ certificate_authority_id }}' --required
AND region = '{{ region }}' --required
AND clientRequestToken = '{{ clientRequestToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_certificate_authority"
    values={[
        { label: 'activate_certificate_authority', value: 'activate_certificate_authority' }
    ]}
>
<TabItem value="activate_certificate_authority">

Activates a successor certificate authority (CA) as the signing certificate authority for your cluster, completing a CA rotation. When you activate a successor CA, Amazon EKS promotes it to be the cluster's signer (its signingStatus becomes IN_USE) and the outgoing CA is retired (NOT_USED). The outgoing CA remains in the cluster's trust bundle but no longer signs certificates. The successor CA you activate must already be present on the cluster and fully distributed (its distributionStatus must be COMPLETE). This is an asynchronous operation that returns an update object you can track with DescribeUpdate . Before you activate the successor CA, make sure the worker nodes you manage and your external clients have been updated to trust it, so they maintain connectivity to the API server after activation. For a limited period after activation, CA rollback is available to revert to the outgoing CA if needed. If you don't activate the successor CA yourself, Amazon EKS activates it automatically as the expiration deadline approaches. For more information, see Rotate the Amazon EKS cluster certificate authority in the Amazon EKS User Guide.

```sql
EXEC aws.eks.certificate_authorities.activate_certificate_authority 
@name='{{ name }}' --required, 
@certificate_authority_id='{{ certificate_authority_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientRequestToken": "{{ clientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
