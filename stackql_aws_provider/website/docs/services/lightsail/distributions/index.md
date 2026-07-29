--- 
title: distributions
hide_title: false
hide_table_of_contents: false
keywords:
  - distributions
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

Creates, updates, deletes, gets or lists a <code>distributions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distributions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.distributions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_distributions"
    values={[
        { label: 'get_distributions', value: 'get_distributions' }
    ]}
>
<TabItem value="get_distributions">

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
    <td><CopyableCode code="distributions" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe your distributions.</td>
</tr>
<tr>
    <td><CopyableCode code="next_page_token" /></td>
    <td><code>string</code></td>
    <td>The token to advance to the next page of results from your request. A next page token is not returned if there are no more results to display. To get the next page of results, perform another GetDistributions request and specify the next page token using the pageToken parameter.</td>
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
    <td><a href="#get_distributions"><CopyableCode code="get_distributions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.</td>
</tr>
<tr>
    <td><a href="#create_distribution"><CopyableCode code="create_distribution" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-distributionName"><code>distributionName</code></a>, <a href="#parameter-origin"><code>origin</code></a>, <a href="#parameter-defaultCacheBehavior"><code>defaultCacheBehavior</code></a>, <a href="#parameter-bundleId"><code>bundleId</code></a></td>
    <td></td>
    <td>Creates an Amazon Lightsail content delivery network (CDN) distribution. A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see Content delivery networks in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#attach_certificate_to_distribution"><CopyableCode code="attach_certificate_to_distribution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-distributionName"><code>distributionName</code></a>, <a href="#parameter-certificateName"><code>certificateName</code></a></td>
    <td></td>
    <td>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution. After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate. Use the CreateCertificate action to create a certificate that you can attach to your distribution. Only certificates created in the us-east-1 Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the us-east-1 Region.</td>
</tr>
<tr>
    <td><a href="#update_distribution"><CopyableCode code="update_distribution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-distributionName"><code>distributionName</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Lightsail content delivery network (CDN) distribution. Use this action to update the configuration of your existing distribution.</td>
</tr>
<tr>
    <td><a href="#delete_distribution"><CopyableCode code="delete_distribution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes your Amazon Lightsail content delivery network (CDN) distribution.</td>
</tr>
<tr>
    <td><a href="#detach_certificate_from_distribution"><CopyableCode code="detach_certificate_from_distribution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-distributionName"><code>distributionName</code></a></td>
    <td></td>
    <td>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution. After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</td>
</tr>
<tr>
    <td><a href="#reset_distribution_cache"><CopyableCode code="reset_distribution_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution. After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</td>
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
    defaultValue="get_distributions"
    values={[
        { label: 'get_distributions', value: 'get_distributions' }
    ]}
>
<TabItem value="get_distributions">

Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.

```sql
SELECT
distributions,
next_page_token
FROM aws.lightsail.distributions
WHERE region = '{{ region }}' -- required
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

Creates an Amazon Lightsail content delivery network (CDN) distribution. A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see Content delivery networks in Amazon Lightsail.

```sql
INSERT INTO aws.lightsail.distributions (
distributionName,
origin,
defaultCacheBehavior,
cacheBehaviorSettings,
cacheBehaviors,
bundleId,
ipAddressType,
tags,
certificateName,
viewerMinimumTlsProtocolVersion,
region
)
SELECT 
'{{ distributionName }}' /* required */,
'{{ origin }}' /* required */,
'{{ defaultCacheBehavior }}' /* required */,
'{{ cacheBehaviorSettings }}',
'{{ cacheBehaviors }}',
'{{ bundleId }}' /* required */,
'{{ ipAddressType }}',
'{{ tags }}',
'{{ certificateName }}',
'{{ viewerMinimumTlsProtocolVersion }}',
'{{ region }}'
RETURNING
distribution,
operation
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
    - name: distributionName
      value: "{{ distributionName }}"
      description: |
        The name for the distribution.
    - name: origin
      description: |
        An object that describes the origin resource for the distribution, such as a Lightsail instance, bucket, or load balancer. The distribution pulls, caches, and serves content from the origin.
      value:
        name: "{{ name }}"
        regionName: "{{ regionName }}"
        protocolPolicy: "{{ protocolPolicy }}"
        responseTimeout: {{ responseTimeout }}
        ipAddressType: "{{ ipAddressType }}"
    - name: defaultCacheBehavior
      description: |
        An object that describes the default cache behavior for the distribution.
      value:
        behavior: "{{ behavior }}"
    - name: cacheBehaviorSettings
      description: |
        An object that describes the cache behavior settings for the distribution.
      value:
        defaultTTL: {{ defaultTTL }}
        minimumTTL: {{ minimumTTL }}
        maximumTTL: {{ maximumTTL }}
        allowedHTTPMethods: "{{ allowedHTTPMethods }}"
        cachedHTTPMethods: "{{ cachedHTTPMethods }}"
        forwardedCookies:
          option: "{{ option }}"
          cookiesAllowList:
            - "{{ cookiesAllowList }}"
        forwardedHeaders:
          option: "{{ option }}"
          headersAllowList:
            - "{{ headersAllowList }}"
        forwardedQueryStrings:
          option: {{ option }}
          queryStringsAllowList:
            - "{{ queryStringsAllowList }}"
    - name: cacheBehaviors
      description: |
        An array of objects that describe the per-path cache behavior for the distribution.
      value:
        - path: "{{ path }}"
          behavior: "{{ behavior }}"
    - name: bundleId
      value: "{{ bundleId }}"
      description: |
        The bundle ID to use for the distribution. A distribution bundle describes the specifications of your distribution, such as the monthly cost and monthly network transfer quota. Use the GetDistributionBundles action to get a list of distribution bundle IDs that you can specify.
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      description: |
        The IP address type for the distribution. The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.
      valid_values: ['dualstack', 'ipv4', 'ipv6']
    - name: tags
      description: |
        The tag keys and optional values to add to the distribution during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: certificateName
      value: "{{ certificateName }}"
      description: |
        The name of the SSL/TLS certificate that you want to attach to the distribution. Use the GetCertificates action to get a list of certificate names that you can specify.
    - name: viewerMinimumTlsProtocolVersion
      value: "{{ viewerMinimumTlsProtocolVersion }}"
      description: |
        The minimum TLS protocol version for the SSL/TLS certificate.
      valid_values: ['TLSv1.1_2016', 'TLSv1.2_2018', 'TLSv1.2_2019', 'TLSv1.2_2021']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_certificate_to_distribution"
    values={[
        { label: 'attach_certificate_to_distribution', value: 'attach_certificate_to_distribution' },
        { label: 'update_distribution', value: 'update_distribution' }
    ]}
>
<TabItem value="attach_certificate_to_distribution">

Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution. After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate. Use the CreateCertificate action to create a certificate that you can attach to your distribution. Only certificates created in the us-east-1 Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the us-east-1 Region.

```sql
UPDATE aws.lightsail.distributions
SET 
distributionName = '{{ distributionName }}',
certificateName = '{{ certificateName }}'
WHERE 
region = '{{ region }}' --required
AND distributionName = '{{ distributionName }}' --required
AND certificateName = '{{ certificateName }}' --required
RETURNING
operation;
```
</TabItem>
<TabItem value="update_distribution">

Updates an existing Amazon Lightsail content delivery network (CDN) distribution. Use this action to update the configuration of your existing distribution.

```sql
UPDATE aws.lightsail.distributions
SET 
distributionName = '{{ distributionName }}',
origin = '{{ origin }}',
defaultCacheBehavior = '{{ defaultCacheBehavior }}',
cacheBehaviorSettings = '{{ cacheBehaviorSettings }}',
cacheBehaviors = '{{ cacheBehaviors }}',
isEnabled = {{ isEnabled }},
viewerMinimumTlsProtocolVersion = '{{ viewerMinimumTlsProtocolVersion }}',
certificateName = '{{ certificateName }}',
useDefaultCertificate = {{ useDefaultCertificate }}
WHERE 
region = '{{ region }}' --required
AND distributionName = '{{ distributionName }}' --required
RETURNING
operation;
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

Deletes your Amazon Lightsail content delivery network (CDN) distribution.

```sql
DELETE FROM aws.lightsail.distributions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_certificate_from_distribution"
    values={[
        { label: 'detach_certificate_from_distribution', value: 'detach_certificate_from_distribution' },
        { label: 'reset_distribution_cache', value: 'reset_distribution_cache' }
    ]}
>
<TabItem value="detach_certificate_from_distribution">

Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution. After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.

```sql
EXEC aws.lightsail.distributions.detach_certificate_from_distribution 
@region='{{ region }}' --required 
@@json=
'{
"distributionName": "{{ distributionName }}"
}'
;
```
</TabItem>
<TabItem value="reset_distribution_cache">

Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution. After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.

```sql
EXEC aws.lightsail.distributions.reset_distribution_cache 
@region='{{ region }}' --required 
@@json=
'{
"distributionName": "{{ distributionName }}"
}'
;
```
</TabItem>
</Tabs>
