--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

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
    <td>The ID of the service. (pattern: &lt;code&gt;svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;(?!svc-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authType" /></td>
    <td><code>string</code></td>
    <td>The type of IAM policy. (NONE, AWS_IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="certificateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate. (pattern: &lt;code&gt;(arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)&#123;2&#125;(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)?)&#123;2&#125;:certificate/&#91;0-9a-z-&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsEntry" /></td>
    <td><code>object</code></td>
    <td>The DNS name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="failureCode" /></td>
    <td><code>string</code></td>
    <td>The failure code.</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>The failure message.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the service. (ACTIVE, CREATE_IN_PROGRESS, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_services">

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
    <td>The ID of the service. (pattern: &lt;code&gt;svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;(?!svc-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsEntry" /></td>
    <td><code>object</code></td>
    <td>The DNS information.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (ACTIVE, CREATE_IN_PROGRESS, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED)</td>
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
    <td><a href="#get_service"><CopyableCode code="get_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified service.</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the services owned by the caller account or shared with the caller account.</td>
</tr>
<tr>
    <td><a href="#create_service"><CopyableCode code="create_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC). For more information, see Services in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><a href="#update_service"><CopyableCode code="update_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified service.</td>
</tr>
<tr>
    <td><a href="#delete_service"><CopyableCode code="delete_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see Delete a service in the Amazon VPC Lattice User Guide.</td>
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
<tr id="parameter-service_identifier">
    <td><CopyableCode code="service_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the service.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

Retrieves information about the specified service.

```sql
SELECT
id,
name,
arn,
authType,
certificateArn,
createdAt,
customDomainName,
dnsEntry,
failureCode,
failureMessage,
lastUpdatedAt,
status
FROM aws.vpc_lattice.services
WHERE service_identifier = '{{ service_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_services">

Lists the services owned by the caller account or shared with the caller account.

```sql
SELECT
id,
name,
arn,
createdAt,
customDomainName,
dnsEntry,
lastUpdatedAt,
status
FROM aws.vpc_lattice.services
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service"
    values={[
        { label: 'create_service', value: 'create_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service">

Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC). For more information, see Services in the Amazon VPC Lattice User Guide.

```sql
INSERT INTO aws.vpc_lattice.services (
clientToken,
name,
tags,
customDomainName,
certificateArn,
authType,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ tags }}',
'{{ customDomainName }}',
'{{ certificateArn }}',
'{{ authType }}',
'{{ region }}'
RETURNING
id,
name,
arn,
authType,
certificateArn,
customDomainName,
dnsEntry,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the services resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: tags
      value: "{{ tags }}"
    - name: customDomainName
      value: "{{ customDomainName }}"
    - name: certificateArn
      value: "{{ certificateArn }}"
    - name: authType
      value: "{{ authType }}"
      valid_values: ['NONE', 'AWS_IAM']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service"
    values={[
        { label: 'update_service', value: 'update_service' }
    ]}
>
<TabItem value="update_service">

Updates the specified service.

```sql
UPDATE aws.vpc_lattice.services
SET 
certificateArn = '{{ certificateArn }}',
authType = '{{ authType }}'
WHERE 
service_identifier = '{{ service_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
arn,
authType,
certificateArn,
customDomainName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service"
    values={[
        { label: 'delete_service', value: 'delete_service' }
    ]}
>
<TabItem value="delete_service">

Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see Delete a service in the Amazon VPC Lattice User Guide.

```sql
DELETE FROM aws.vpc_lattice.services
WHERE service_identifier = '{{ service_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
