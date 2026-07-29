--- 
title: domain_names
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_names
  - apigatewayv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.domain_names" /></td></tr>
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
    <td><CopyableCode code="api_mapping_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-512&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name_arn" /></td>
    <td><code>string</code></td>
    <td>Represents an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name_configurations" /></td>
    <td><code>array</code></td>
    <td>The domain name configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="mutual_tls_authentication" /></td>
    <td><code>object</code></td>
    <td>The mutual TLS authentication configuration for a custom domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_mode" /></td>
    <td><code>string</code></td>
    <td>The routing mode. (API_MAPPING_ONLY, ROUTING_RULE_ONLY, ROUTING_RULE_THEN_API_MAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags associated with a domain name.</td>
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
    <td><CopyableCode code="api_mapping_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-512&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name_arn" /></td>
    <td><code>string</code></td>
    <td>Represents an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name_configurations" /></td>
    <td><code>array</code></td>
    <td>The domain name configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="mutual_tls_authentication" /></td>
    <td><code>object</code></td>
    <td>The mutual TLS authentication configuration for a custom domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_mode" /></td>
    <td><code>string</code></td>
    <td>The routing mode. (API_MAPPING_ONLY, ROUTING_RULE_ONLY, ROUTING_RULE_THEN_API_MAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags associated with a domain name.</td>
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
    <td></td>
    <td>Gets a domain name.</td>
</tr>
<tr>
    <td><a href="#get_domain_names"><CopyableCode code="get_domain_names" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the domain names for an AWS account.</td>
</tr>
<tr>
    <td><a href="#create_domain_name"><CopyableCode code="create_domain_name" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Creates a domain name.</td>
</tr>
<tr>
    <td><a href="#update_domain_name"><CopyableCode code="update_domain_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a domain name.</td>
</tr>
<tr>
    <td><a href="#delete_domain_name"><CopyableCode code="delete_domain_name" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a domain name.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
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

Gets a domain name.

```sql
SELECT
api_mapping_selection_expression,
domain_name,
domain_name_arn,
domain_name_configurations,
mutual_tls_authentication,
routing_mode,
tags
FROM aws.apigatewayv2.domain_names
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_domain_names">

Gets the domain names for an AWS account.

```sql
SELECT
api_mapping_selection_expression,
domain_name,
domain_name_arn,
domain_name_configurations,
mutual_tls_authentication,
routing_mode,
tags
FROM aws.apigatewayv2.domain_names
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
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

Creates a domain name.

```sql
INSERT INTO aws.apigatewayv2.domain_names (
DomainName,
DomainNameConfigurations,
MutualTlsAuthentication,
RoutingMode,
Tags,
region
)
SELECT 
'{{ DomainName }}' /* required */,
'{{ DomainNameConfigurations }}',
'{{ MutualTlsAuthentication }}',
'{{ RoutingMode }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
api_mapping_selection_expression,
domain_name,
domain_name_arn,
domain_name_configurations,
mutual_tls_authentication,
routing_mode,
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
    - name: DomainName
      value: "{{ DomainName }}"
      description: |
        A string with a length between [1-512].
    - name: DomainNameConfigurations
      description: |
        The domain name configurations.
      value:
        - ApiGatewayDomainName: "{{ ApiGatewayDomainName }}"
          CertificateArn: "{{ CertificateArn }}"
          CertificateName: "{{ CertificateName }}"
          CertificateUploadDate: "{{ CertificateUploadDate }}"
          DomainNameStatus: "{{ DomainNameStatus }}"
          DomainNameStatusMessage: "{{ DomainNameStatusMessage }}"
          EndpointType: "{{ EndpointType }}"
          HostedZoneId: "{{ HostedZoneId }}"
          IpAddressType: "{{ IpAddressType }}"
          SecurityPolicy: "{{ SecurityPolicy }}"
          OwnershipVerificationCertificateArn: "{{ OwnershipVerificationCertificateArn }}"
    - name: MutualTlsAuthentication
      value:
        TruststoreUri: "{{ TruststoreUri }}"
        TruststoreVersion: "{{ TruststoreVersion }}"
    - name: RoutingMode
      value: "{{ RoutingMode }}"
      valid_values: ['API_MAPPING_ONLY', 'ROUTING_RULE_ONLY', 'ROUTING_RULE_THEN_API_MAPPING']
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents a collection of tags associated with the resource.
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

Updates a domain name.

```sql
UPDATE aws.apigatewayv2.domain_names
SET 
DomainNameConfigurations = '{{ DomainNameConfigurations }}',
MutualTlsAuthentication = '{{ MutualTlsAuthentication }}',
RoutingMode = '{{ RoutingMode }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
api_mapping_selection_expression,
domain_name,
domain_name_arn,
domain_name_configurations,
mutual_tls_authentication,
routing_mode,
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

Deletes a domain name.

```sql
DELETE FROM aws.apigatewayv2.domain_names
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
