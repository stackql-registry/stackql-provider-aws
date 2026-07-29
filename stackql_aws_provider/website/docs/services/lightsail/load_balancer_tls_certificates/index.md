--- 
title: load_balancer_tls_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_tls_certificates
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>load_balancer_tls_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancer_tls_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.load_balancer_tls_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_load_balancer_tls_certificates"
    values={[
        { label: 'get_load_balancer_tls_certificates', value: 'get_load_balancer_tls_certificates' }
    ]}
>
<TabItem value="get_load_balancer_tls_certificates">

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
    <td><CopyableCode code="tls_certificates" /></td>
    <td><code>array</code></td>
    <td>An array of LoadBalancerTlsCertificate objects describing your SSL/TLS certificates.</td>
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
    <td><a href="#get_load_balancer_tls_certificates"><CopyableCode code="get_load_balancer_tls_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</td>
</tr>
<tr>
    <td><a href="#create_load_balancer_tls_certificate"><CopyableCode code="create_load_balancer_tls_certificate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loadBalancerName"><code>loadBalancerName</code></a>, <a href="#parameter-certificateName"><code>certificateName</code></a>, <a href="#parameter-certificateDomainName"><code>certificateDomainName</code></a></td>
    <td></td>
    <td>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). The CreateLoadBalancerTlsCertificate operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#attach_load_balancer_tls_certificate"><CopyableCode code="attach_load_balancer_tls_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loadBalancerName"><code>loadBalancerName</code></a>, <a href="#parameter-certificateName"><code>certificateName</code></a></td>
    <td></td>
    <td>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the AttachLoadBalancerTlsCertificate action with the non-attached certificate, and it will replace the existing one and become the attached certificate. The AttachLoadBalancerTlsCertificate operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_load_balancer_tls_certificate"><CopyableCode code="delete_load_balancer_tls_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an SSL/TLS certificate associated with a Lightsail load balancer. The DeleteLoadBalancerTlsCertificate operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_load_balancer_tls_certificates"
    values={[
        { label: 'get_load_balancer_tls_certificates', value: 'get_load_balancer_tls_certificates' }
    ]}
>
<TabItem value="get_load_balancer_tls_certificates">

Returns information about the TLS certificates that are associated with the specified Lightsail load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.

```sql
SELECT
tls_certificates
FROM aws.lightsail.load_balancer_tls_certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_load_balancer_tls_certificate"
    values={[
        { label: 'create_load_balancer_tls_certificate', value: 'create_load_balancer_tls_certificate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_load_balancer_tls_certificate">

Creates an SSL/TLS certificate for an Amazon Lightsail load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). The CreateLoadBalancerTlsCertificate operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.load_balancer_tls_certificates (
loadBalancerName,
certificateName,
certificateDomainName,
certificateAlternativeNames,
tags,
region
)
SELECT 
'{{ loadBalancerName }}' /* required */,
'{{ certificateName }}' /* required */,
'{{ certificateDomainName }}' /* required */,
'{{ certificateAlternativeNames }}',
'{{ tags }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: load_balancer_tls_certificates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the load_balancer_tls_certificates resource.
    - name: loadBalancerName
      value: "{{ loadBalancerName }}"
      description: |
        The load balancer name where you want to create the SSL/TLS certificate.
    - name: certificateName
      value: "{{ certificateName }}"
      description: |
        The SSL/TLS certificate name. You can have up to 10 certificates in your account at one time. Each Lightsail load balancer can have up to 2 certificates associated with it at one time. There is also an overall limit to the number of certificates that can be issue in a 365-day period. For more information, see Limits.
    - name: certificateDomainName
      value: "{{ certificateDomainName }}"
      description: |
        The domain name (example.com) for your SSL/TLS certificate.
    - name: certificateAlternativeNames
      value:
        - "{{ certificateAlternativeNames }}"
      description: |
        An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9 alternative names (in addition to the 1 primary domain). We do not support wildcards (*.example.com).
    - name: tags
      description: |
        The tag keys and optional values to add to the resource during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_load_balancer_tls_certificate"
    values={[
        { label: 'attach_load_balancer_tls_certificate', value: 'attach_load_balancer_tls_certificate' }
    ]}
>
<TabItem value="attach_load_balancer_tls_certificate">

Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the AttachLoadBalancerTlsCertificate action with the non-attached certificate, and it will replace the existing one and become the attached certificate. The AttachLoadBalancerTlsCertificate operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.load_balancer_tls_certificates
SET 
loadBalancerName = '{{ loadBalancerName }}',
certificateName = '{{ certificateName }}'
WHERE 
region = '{{ region }}' --required
AND loadBalancerName = '{{ loadBalancerName }}' --required
AND certificateName = '{{ certificateName }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_load_balancer_tls_certificate"
    values={[
        { label: 'delete_load_balancer_tls_certificate', value: 'delete_load_balancer_tls_certificate' }
    ]}
>
<TabItem value="delete_load_balancer_tls_certificate">

Deletes an SSL/TLS certificate associated with a Lightsail load balancer. The DeleteLoadBalancerTlsCertificate operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.load_balancer_tls_certificates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
