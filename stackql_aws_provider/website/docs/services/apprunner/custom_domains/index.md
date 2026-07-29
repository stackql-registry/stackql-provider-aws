--- 
title: custom_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_domains
  - apprunner
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

Creates, updates, deletes, gets or lists a <code>custom_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.custom_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_domains"
    values={[
        { label: 'describe_custom_domains', value: 'describe_custom_domains' }
    ]}
>
<TabItem value="describe_custom_domains">

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
    <td><CopyableCode code="custom_domains" /></td>
    <td><code>array</code></td>
    <td>A list of descriptions of custom domain names that are associated with the service. In a paginated request, the request returns up to MaxResults records per call.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_target" /></td>
    <td><code>string</code></td>
    <td>The App Runner subdomain of the App Runner service. The associated custom domain names are mapped to this target name. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the App Runner service whose associated custom domain names you want to describe. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:(\w|\/|-)&#123;1,1011&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_dns_targets" /></td>
    <td><code>array</code></td>
    <td>DNS Target records for the custom domains of this Amazon VPC.</td>
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
    <td><a href="#describe_custom_domains"><CopyableCode code="describe_custom_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a description of custom domain names that are associated with an App Runner service.</td>
</tr>
<tr>
    <td><a href="#associate_custom_domain"><CopyableCode code="associate_custom_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceArn"><code>ServiceArn</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Associate your own domain name with the App Runner subdomain URL of your App Runner service. After you call AssociateCustomDomain and receive a successful response, use the information in the CustomDomain record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in AWS Certificate Manager (ACM).</td>
</tr>
<tr>
    <td><a href="#disassociate_custom_domain"><CopyableCode code="disassociate_custom_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceArn"><code>ServiceArn</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Disassociate a custom domain name from an App Runner service. Certificates tracking domain validity are associated with a custom domain and are stored in AWS Certificate Manager (ACM). These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</td>
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
    defaultValue="describe_custom_domains"
    values={[
        { label: 'describe_custom_domains', value: 'describe_custom_domains' }
    ]}
>
<TabItem value="describe_custom_domains">

Return a description of custom domain names that are associated with an App Runner service.

```sql
SELECT
custom_domains,
dns_target,
next_token,
service_arn,
vpc_dns_targets
FROM aws.apprunner.custom_domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_custom_domain"
    values={[
        { label: 'associate_custom_domain', value: 'associate_custom_domain' }
    ]}
>
<TabItem value="associate_custom_domain">

Associate your own domain name with the App Runner subdomain URL of your App Runner service. After you call AssociateCustomDomain and receive a successful response, use the information in the CustomDomain record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in AWS Certificate Manager (ACM).

```sql
UPDATE aws.apprunner.custom_domains
SET 
ServiceArn = '{{ ServiceArn }}',
DomainName = '{{ DomainName }}',
EnableWWWSubdomain = {{ EnableWWWSubdomain }}
WHERE 
region = '{{ region }}' --required
AND ServiceArn = '{{ ServiceArn }}' --required
AND DomainName = '{{ DomainName }}' --required
RETURNING
custom_domain,
dns_target,
service_arn,
vpc_dns_targets;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_custom_domain"
    values={[
        { label: 'disassociate_custom_domain', value: 'disassociate_custom_domain' }
    ]}
>
<TabItem value="disassociate_custom_domain">

Disassociate a custom domain name from an App Runner service. Certificates tracking domain validity are associated with a custom domain and are stored in AWS Certificate Manager (ACM). These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.

```sql
EXEC aws.apprunner.custom_domains.disassociate_custom_domain 
@region='{{ region }}' --required 
@@json=
'{
"ServiceArn": "{{ ServiceArn }}", 
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
</Tabs>
