--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
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

Creates, updates, deletes, gets or lists a <code>certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_certificates"
    values={[
        { label: 'get_certificates', value: 'get_certificates' }
    ]}
>
<TabItem value="get_certificates">

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
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>An object that describes certificates.</td>
</tr>
<tr>
    <td><CopyableCode code="next_page_token" /></td>
    <td><code>string</code></td>
    <td>If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</td>
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
    <td><a href="#get_certificates"><CopyableCode code="get_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one or more Amazon Lightsail SSL/TLS certificates. To get a summary of a certificate, omit includeCertificateDetails from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</td>
</tr>
<tr>
    <td><a href="#create_certificate"><CopyableCode code="create_certificate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-certificateName"><code>certificateName</code></a>, <a href="#parameter-domainName"><code>domainName</code></a></td>
    <td></td>
    <td>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service. After the certificate is valid, use the AttachCertificateToDistribution action to use the certificate and its domains with your distribution. Or use the UpdateContainerService action to use the certificate and its domains with your container service. Only certificates created in the us-east-1 Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the us-east-1 Region.</td>
</tr>
<tr>
    <td><a href="#delete_certificate"><CopyableCode code="delete_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution. Certificates that are currently attached to a distribution cannot be deleted. Use the DetachCertificateFromDistribution action to detach a certificate from a distribution.</td>
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
    defaultValue="get_certificates"
    values={[
        { label: 'get_certificates', value: 'get_certificates' }
    ]}
>
<TabItem value="get_certificates">

Returns information about one or more Amazon Lightsail SSL/TLS certificates. To get a summary of a certificate, omit includeCertificateDetails from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.

```sql
SELECT
certificates,
next_page_token
FROM aws.lightsail.certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_certificate"
    values={[
        { label: 'create_certificate', value: 'create_certificate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_certificate">

Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service. After the certificate is valid, use the AttachCertificateToDistribution action to use the certificate and its domains with your distribution. Or use the UpdateContainerService action to use the certificate and its domains with your container service. Only certificates created in the us-east-1 Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the us-east-1 Region.

```sql
INSERT INTO aws.lightsail.certificates (
certificateName,
domainName,
subjectAlternativeNames,
tags,
region
)
SELECT 
'{{ certificateName }}' /* required */,
'{{ domainName }}' /* required */,
'{{ subjectAlternativeNames }}',
'{{ tags }}',
'{{ region }}'
RETURNING
certificate,
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: certificates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the certificates resource.
    - name: certificateName
      value: "{{ certificateName }}"
      description: |
        The name for the certificate.
    - name: domainName
      value: "{{ domainName }}"
      description: |
        The domain name (example.com) for the certificate.
    - name: subjectAlternativeNames
      value:
        - "{{ subjectAlternativeNames }}"
      description: |
        An array of strings that specify the alternate domains (example2.com) and subdomains (blog.example.com) for the certificate. You can specify a maximum of nine alternate domains (in addition to the primary domain name). Wildcard domain entries (*.example.com) are not supported.
    - name: tags
      description: |
        The tag keys and optional values to add to the certificate during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_certificate"
    values={[
        { label: 'delete_certificate', value: 'delete_certificate' }
    ]}
>
<TabItem value="delete_certificate">

Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution. Certificates that are currently attached to a distribution cannot be deleted. Use the DetachCertificateFromDistribution action to detach a certificate from a distribution.

```sql
DELETE FROM aws.lightsail.certificates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
