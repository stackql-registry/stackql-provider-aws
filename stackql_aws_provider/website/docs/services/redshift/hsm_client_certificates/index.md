--- 
title: hsm_client_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - hsm_client_certificates
  - redshift
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

Creates, updates, deletes, gets or lists a <code>hsm_client_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hsm_client_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.hsm_client_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hsm_client_certificates"
    values={[
        { label: 'describe_hsm_client_certificates', value: 'describe_hsm_client_certificates' }
    ]}
>
<TabItem value="describe_hsm_client_certificates">

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
    <td><CopyableCode code="HsmClientCertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the HSM client certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="HsmClientCertificatePublicKey" /></td>
    <td><code>string</code></td>
    <td>The public key that the Amazon Redshift cluster will use to connect to the HSM. You must register the public key in the HSM.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The list of tags for the HSM client certificate.</td>
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
    <td><a href="#describe_hsm_client_certificates"><CopyableCode code="describe_hsm_client_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HsmClientCertificateIdentifier"><code>HsmClientCertificateIdentifier</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all HSM client certificates that have any combination of those values are returned. If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_hsm_client_certificate"><CopyableCode code="create_hsm_client_certificate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-HsmClientCertificateIdentifier"><code>HsmClientCertificateIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases. The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to Hardware Security Modules in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#delete_hsm_client_certificate"><CopyableCode code="delete_hsm_client_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-HsmClientCertificateIdentifier"><code>HsmClientCertificateIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified HSM client certificate.</td>
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
<tr id="parameter-HsmClientCertificateIdentifier">
    <td><CopyableCode code="HsmClientCertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the HSM client certificate to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-HsmClientCertificateIdentifier">
    <td><CopyableCode code="HsmClientCertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a specific HSM client certificate for which you want information. If no identifier is specified, information is returned for all HSM client certificates owned by your Amazon Web Services account.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeHsmClientCertificates request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching HSM client certificates that are associated with the specified key or keys. For example, suppose that you have HSM client certificates that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the HSM client certificates that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching HSM client certificates that are associated with the specified tag value or values. For example, suppose that you have HSM client certificates that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the HSM client certificates that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_hsm_client_certificates"
    values={[
        { label: 'describe_hsm_client_certificates', value: 'describe_hsm_client_certificates' }
    ]}
>
<TabItem value="describe_hsm_client_certificates">

Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all HSM client certificates that have any combination of those values are returned. If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
HsmClientCertificateIdentifier,
HsmClientCertificatePublicKey,
Tags
FROM aws.redshift.hsm_client_certificates
WHERE region = '{{ region }}' -- required
AND HsmClientCertificateIdentifier = '{{ HsmClientCertificateIdentifier }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hsm_client_certificate"
    values={[
        { label: 'create_hsm_client_certificate', value: 'create_hsm_client_certificate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hsm_client_certificate">

Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases. The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to Hardware Security Modules in the Amazon Redshift Cluster Management Guide.

```sql
INSERT INTO aws.redshift.hsm_client_certificates (
HsmClientCertificateIdentifier,
region,
Tags
)
SELECT 
'{{ HsmClientCertificateIdentifier }}',
'{{ region }}',
'{{ Tags }}'
RETURNING
HsmClientCertificateIdentifier,
HsmClientCertificatePublicKey,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hsm_client_certificates
  props:
    - name: HsmClientCertificateIdentifier
      value: "{{ HsmClientCertificateIdentifier }}"
      description: Required parameter for the hsm_client_certificates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hsm_client_certificates resource.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hsm_client_certificate"
    values={[
        { label: 'delete_hsm_client_certificate', value: 'delete_hsm_client_certificate' }
    ]}
>
<TabItem value="delete_hsm_client_certificate">

Deletes the specified HSM client certificate.

```sql
DELETE FROM aws.redshift.hsm_client_certificates
WHERE HsmClientCertificateIdentifier = '{{ HsmClientCertificateIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
