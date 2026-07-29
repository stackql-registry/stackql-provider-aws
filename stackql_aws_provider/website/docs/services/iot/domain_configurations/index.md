--- 
title: domain_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_configurations
  - iot
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

Creates, updates, deletes, gets or lists a <code>domain_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.domain_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain_configuration"
    values={[
        { label: 'describe_domain_configuration', value: 'describe_domain_configuration' },
        { label: 'list_domain_configurations', value: 'list_domain_configurations' }
    ]}
>
<TabItem value="describe_domain_configuration">

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
    <td><CopyableCode code="application_protocol" /></td>
    <td><code>string</code></td>
    <td>An enumerated string that speciﬁes the application-layer protocol. SECURE_MQTT - MQTT over TLS. MQTT_WSS - MQTT over WebSocket. HTTPS - HTTP over TLS. DEFAULT - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify application_layer protocol. For more information, see Device communication protocols. (SECURE_MQTT, MQTT_WSS, HTTPS, DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="authentication_type" /></td>
    <td><code>string</code></td>
    <td>An enumerated string that speciﬁes the authentication type. CUSTOM_AUTH_X509 - Use custom authentication and authorization with additional details from the X.509 client certificate. CUSTOM_AUTH - Use custom authentication and authorization. For more information, see Custom authentication and authorization. AWS_X509 - Use X.509 client certificates without custom authentication and authorization. For more information, see X.509 client certificates. AWS_SIGV4 - Use Amazon Web Services Signature Version 4. For more information, see IAM users, groups, and roles. DEFAULT - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify authentication type. For more information, see Device communication protocols. (CUSTOM_AUTH_X509, CUSTOM_AUTH, AWS_X509, AWS_SIGV4, DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_config" /></td>
    <td><code>object</code></td>
    <td>An object that specifies the authorization service for a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="client_certificate_config" /></td>
    <td><code>object</code></td>
    <td>An object that speciﬁes the client certificate conﬁguration for a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the domain configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain configuration. (pattern: &lt;code&gt;&#91;\w.:-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_configuration_status" /></td>
    <td><code>string</code></td>
    <td>A Boolean value that specifies the current state of the domain configuration. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_type" /></td>
    <td><code>string</code></td>
    <td>The type of the domain. (ENDPOINT, AWS_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the domain configuration's status was last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="server_certificate_config" /></td>
    <td><code>object</code></td>
    <td>The server certificate configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="server_certificates" /></td>
    <td><code>array</code></td>
    <td>A list containing summary information about the server certificate included in the domain configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The type of service delivered by the endpoint. (DATA, CREDENTIAL_PROVIDER, JOBS)</td>
</tr>
<tr>
    <td><CopyableCode code="tls_config" /></td>
    <td><code>object</code></td>
    <td>An object that specifies the TLS configuration for a domain.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domain_configurations">

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
    <td><CopyableCode code="domain_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the domain configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain configuration. This value must be unique to a region. (pattern: &lt;code&gt;&#91;\w.:-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The type of service delivered by the endpoint. (DATA, CREDENTIAL_PROVIDER, JOBS)</td>
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
    <td><a href="#describe_domain_configuration"><CopyableCode code="describe_domain_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_configuration_name"><code>domain_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about a domain configuration. Requires permission to access the DescribeDomainConfiguration action.</td>
</tr>
<tr>
    <td><a href="#list_domain_configurations"><CopyableCode code="list_domain_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-serviceType"><code>serviceType</code></a></td>
    <td>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name. Requires permission to access the ListDomainConfigurations action.</td>
</tr>
<tr>
    <td><a href="#create_domain_configuration"><CopyableCode code="create_domain_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_configuration_name"><code>domain_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a domain configuration. Requires permission to access the CreateDomainConfiguration action.</td>
</tr>
<tr>
    <td><a href="#update_domain_configuration"><CopyableCode code="update_domain_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_configuration_name"><code>domain_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated. Requires permission to access the UpdateDomainConfiguration action.</td>
</tr>
<tr>
    <td><a href="#delete_domain_configuration"><CopyableCode code="delete_domain_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_configuration_name"><code>domain_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified domain configuration. Requires permission to access the DeleteDomainConfiguration action.</td>
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
<tr id="parameter-domain_configuration_name">
    <td><CopyableCode code="domain_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain configuration to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The result page size.</td>
</tr>
<tr id="parameter-serviceType">
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>The type of service delivered by the endpoint.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_domain_configuration"
    values={[
        { label: 'describe_domain_configuration', value: 'describe_domain_configuration' },
        { label: 'list_domain_configurations', value: 'list_domain_configurations' }
    ]}
>
<TabItem value="describe_domain_configuration">

Gets summary information about a domain configuration. Requires permission to access the DescribeDomainConfiguration action.

```sql
SELECT
application_protocol,
authentication_type,
authorizer_config,
client_certificate_config,
domain_configuration_arn,
domain_configuration_name,
domain_configuration_status,
domain_name,
domain_type,
last_status_change_date,
server_certificate_config,
server_certificates,
service_type,
tls_config
FROM aws.iot.domain_configurations
WHERE domain_configuration_name = '{{ domain_configuration_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domain_configurations">

Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name. Requires permission to access the ListDomainConfigurations action.

```sql
SELECT
domain_configuration_arn,
domain_configuration_name,
service_type
FROM aws.iot.domain_configurations
WHERE region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND pageSize = '{{ pageSize }}'
AND serviceType = '{{ serviceType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain_configuration"
    values={[
        { label: 'create_domain_configuration', value: 'create_domain_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain_configuration">

Creates a domain configuration. Requires permission to access the CreateDomainConfiguration action.

```sql
INSERT INTO aws.iot.domain_configurations (
domainName,
serverCertificateArns,
validationCertificateArn,
authorizerConfig,
serviceType,
tags,
tlsConfig,
serverCertificateConfig,
authenticationType,
applicationProtocol,
clientCertificateConfig,
domain_configuration_name,
region
)
SELECT 
'{{ domainName }}',
'{{ serverCertificateArns }}',
'{{ validationCertificateArn }}',
'{{ authorizerConfig }}',
'{{ serviceType }}',
'{{ tags }}',
'{{ tlsConfig }}',
'{{ serverCertificateConfig }}',
'{{ authenticationType }}',
'{{ applicationProtocol }}',
'{{ clientCertificateConfig }}',
'{{ domain_configuration_name }}',
'{{ region }}'
RETURNING
domain_configuration_arn,
domain_configuration_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_configurations
  props:
    - name: domain_configuration_name
      value: "{{ domain_configuration_name }}"
      description: Required parameter for the domain_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domain_configurations resource.
    - name: domainName
      value: "{{ domainName }}"
    - name: serverCertificateArns
      value:
        - "{{ serverCertificateArns }}"
    - name: validationCertificateArn
      value: "{{ validationCertificateArn }}"
    - name: authorizerConfig
      description: |
        An object that specifies the authorization service for a domain.
      value:
        defaultAuthorizerName: "{{ defaultAuthorizerName }}"
        allowAuthorizerOverride: {{ allowAuthorizerOverride }}
    - name: serviceType
      value: "{{ serviceType }}"
      valid_values: ['DATA', 'CREDENTIAL_PROVIDER', 'JOBS']
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: tlsConfig
      description: |
        An object that specifies the TLS configuration for a domain.
      value:
        securityPolicy: "{{ securityPolicy }}"
    - name: serverCertificateConfig
      description: |
        The server certificate configuration.
      value:
        enableOCSPCheck: {{ enableOCSPCheck }}
        ocspLambdaArn: "{{ ocspLambdaArn }}"
        ocspAuthorizedResponderArn: "{{ ocspAuthorizedResponderArn }}"
    - name: authenticationType
      value: "{{ authenticationType }}"
      valid_values: ['CUSTOM_AUTH_X509', 'CUSTOM_AUTH', 'AWS_X509', 'AWS_SIGV4', 'DEFAULT']
    - name: applicationProtocol
      value: "{{ applicationProtocol }}"
      valid_values: ['SECURE_MQTT', 'MQTT_WSS', 'HTTPS', 'DEFAULT']
    - name: clientCertificateConfig
      description: |
        An object that speciﬁes the client certificate conﬁguration for a domain.
      value:
        clientCertificateCallbackArn: "{{ clientCertificateCallbackArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_configuration"
    values={[
        { label: 'update_domain_configuration', value: 'update_domain_configuration' }
    ]}
>
<TabItem value="update_domain_configuration">

Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated. Requires permission to access the UpdateDomainConfiguration action.

```sql
UPDATE aws.iot.domain_configurations
SET 
authorizerConfig = '{{ authorizerConfig }}',
domainConfigurationStatus = '{{ domainConfigurationStatus }}',
removeAuthorizerConfig = {{ removeAuthorizerConfig }},
tlsConfig = '{{ tlsConfig }}',
serverCertificateConfig = '{{ serverCertificateConfig }}',
authenticationType = '{{ authenticationType }}',
applicationProtocol = '{{ applicationProtocol }}',
clientCertificateConfig = '{{ clientCertificateConfig }}'
WHERE 
domain_configuration_name = '{{ domain_configuration_name }}' --required
AND region = '{{ region }}' --required
RETURNING
domain_configuration_arn,
domain_configuration_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_configuration"
    values={[
        { label: 'delete_domain_configuration', value: 'delete_domain_configuration' }
    ]}
>
<TabItem value="delete_domain_configuration">

Deletes the specified domain configuration. Requires permission to access the DeleteDomainConfiguration action.

```sql
DELETE FROM aws.iot.domain_configurations
WHERE domain_configuration_name = '{{ domain_configuration_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
