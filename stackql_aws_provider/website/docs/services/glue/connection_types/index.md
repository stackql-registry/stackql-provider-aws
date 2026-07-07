--- 
title: connection_types
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_types
  - glue
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

Creates, updates, deletes, gets or lists a <code>connection_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.connection_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connection_type"
    values={[
        { label: 'describe_connection_type', value: 'describe_connection_type' },
        { label: 'list_connection_types', value: 'list_connection_types' }
    ]}
>
<TabItem value="describe_connection_type">

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
    <td><CopyableCode code="AthenaConnectionProperties" /></td>
    <td><code>object</code></td>
    <td>Connection properties specific to the Athena compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthenticationConfiguration" /></td>
    <td><code>object</code></td>
    <td>The type of authentication used for the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="Capabilities" /></td>
    <td><code>object</code></td>
    <td>The supported authentication types, data interface types (compute environments), and data operations of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="ComputeEnvironmentConfigurations" /></td>
    <td><code>object</code></td>
    <td>The compute environments that are supported by the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionOptions" /></td>
    <td><code>object</code></td>
    <td>Returns properties that can be set when creating a connection in the ConnectionInput.ConnectionProperties. ConnectionOptions defines parameters that can be set in a Spark ETL script in the connection options map passed to a dataframe.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionProperties" /></td>
    <td><code>object</code></td>
    <td>Connection properties which are common across compute environments.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionType" /></td>
    <td><code>string</code></td>
    <td>The name of the connection type. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the connection type.</td>
</tr>
<tr>
    <td><CopyableCode code="PhysicalConnectionRequirements" /></td>
    <td><code>object</code></td>
    <td>Physical requirements for a connection, such as VPC, Subnet and Security Group specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="PythonConnectionProperties" /></td>
    <td><code>object</code></td>
    <td>Connection properties specific to the Python compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="RestConfiguration" /></td>
    <td><code>object</code></td>
    <td>HTTP request and response configuration, validation endpoint, and entity configurations for REST based data source.</td>
</tr>
<tr>
    <td><CopyableCode code="SparkConnectionProperties" /></td>
    <td><code>object</code></td>
    <td>Connection properties specific to the Spark compute environment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connection_types">

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
    <td><CopyableCode code="Capabilities" /></td>
    <td><code>object</code></td>
    <td>The supported authentication types, data interface types (compute environments), and data operations of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="Categories" /></td>
    <td><code>array</code></td>
    <td>A list of categories that this connection type belongs to. Categories help users filter and find appropriate connection types based on their use cases.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionType" /></td>
    <td><code>string</code></td>
    <td>The name of the connection type. (JDBC, SFTP, MONGODB, KAFKA, NETWORK, MARKETPLACE, CUSTOM, SALESFORCE, VIEW_VALIDATION_REDSHIFT, VIEW_VALIDATION_ATHENA, GOOGLEADS, GOOGLESHEETS, GOOGLEANALYTICS4, SERVICENOW, MARKETO, SAPODATA, ZENDESK, JIRACLOUD, NETSUITEERP, HUBSPOT, FACEBOOKADS, INSTAGRAMADS, ZOHOCRM, SALESFORCEPARDOT, SALESFORCEMARKETINGCLOUD, ADOBEANALYTICS, SLACK, LINKEDIN, MIXPANEL, ASANA, STRIPE, SMARTSHEET, DATADOG, WOOCOMMERCE, INTERCOM, SNAPCHATADS, PAYPAL, QUICKBOOKS, FACEBOOKPAGEINSIGHTS, FRESHDESK, TWILIO, DOCUSIGNMONITOR, FRESHSALES, ZOOM, GOOGLESEARCHCONSOLE, SALESFORCECOMMERCECLOUD, SAPCONCUR, DYNATRACE, MICROSOFTDYNAMIC365FINANCEANDOPS, MICROSOFTTEAMS, BLACKBAUDRAISEREDGENXT, MAILCHIMP, GITLAB, PENDO, PRODUCTBOARD, CIRCLECI, PIPEDIVE, SENDGRID, AZURECOSMOS, AZURESQL, BIGQUERY, BLACKBAUD, CLOUDERAHIVE, CLOUDERAIMPALA, CLOUDWATCH, CLOUDWATCHMETRICS, CMDB, DATALAKEGEN2, DB2, DB2AS400, DOCUMENTDB, DOMO, DYNAMODB, GOOGLECLOUDSTORAGE, HBASE, KUSTOMER, MICROSOFTDYNAMICS365CRM, MONDAY, MYSQL, OKTA, OPENSEARCH, ORACLE, PIPEDRIVE, POSTGRESQL, SAPHANA, SQLSERVER, SYNAPSE, TERADATA, TERADATANOS, TIMESTREAM, TPCDS, VERTICA)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionTypeVariants" /></td>
    <td><code>array</code></td>
    <td>A list of variants available for this connection type. Different variants may provide specialized configurations for specific use cases or implementations of the same general connection type.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the connection type.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The human-readable name for the connection type that is displayed in the Glue console.</td>
</tr>
<tr>
    <td><CopyableCode code="LogoUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the logo associated with a connection type.</td>
</tr>
<tr>
    <td><CopyableCode code="Vendor" /></td>
    <td><code>string</code></td>
    <td>The name of the vendor or provider that created or maintains this connection type.</td>
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
    <td><a href="#describe_connection_type"><CopyableCode code="describe_connection_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DescribeConnectionType API provides full details of the supported options for a given connection type in Glue. The response includes authentication configuration details that show supported authentication types and properties, and RestConfiguration for custom REST-based connection types registered via RegisterConnectionType. See also: ListConnectionTypes, RegisterConnectionType, DeleteConnectionType</td>
</tr>
<tr>
    <td><a href="#list_connection_types"><CopyableCode code="list_connection_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListConnectionTypes API provides a discovery mechanism to learn available connection types in Glue. The response contains a list of connection types with high-level details of what is supported for each connection type, including both built-in connection types and custom connection types registered via RegisterConnectionType. The connection types listed are the set of supported options for the ConnectionType value in the CreateConnection API. See also: DescribeConnectionType, RegisterConnectionType, DeleteConnectionType</td>
</tr>
<tr>
    <td><a href="#register_connection_type"><CopyableCode code="register_connection_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionType"><code>ConnectionType</code></a>, <a href="#parameter-IntegrationType"><code>IntegrationType</code></a>, <a href="#parameter-ConnectionProperties"><code>ConnectionProperties</code></a>, <a href="#parameter-ConnectorAuthenticationConfiguration"><code>ConnectorAuthenticationConfiguration</code></a>, <a href="#parameter-RestConfiguration"><code>RestConfiguration</code></a></td>
    <td></td>
    <td>Registers a custom connection type in Glue based on the configuration provided. This operation enables customers to configure custom connectors for any data source with REST-based APIs, eliminating the need for building custom Lambda connectors. The registered connection type stores details about how requests and responses are interpreted by REST sources, including connection properties, authentication configuration, and REST configuration with entity definitions. Once registered, customers can create connections using this connection type and work with them the same way as natively supported Glue connectors. Supports multiple authentication types including Basic, OAuth2 (Client Credentials, JWT Bearer, Authorization Code), and Custom Auth configurations.</td>
</tr>
<tr>
    <td><a href="#delete_connection_type"><CopyableCode code="delete_connection_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom connection type in Glue. The connection type must exist and be registered before it can be deleted. This operation supports cleanup of connection type resources and helps maintain proper lifecycle management of custom connection types.</td>
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
    defaultValue="describe_connection_type"
    values={[
        { label: 'describe_connection_type', value: 'describe_connection_type' },
        { label: 'list_connection_types', value: 'list_connection_types' }
    ]}
>
<TabItem value="describe_connection_type">

The DescribeConnectionType API provides full details of the supported options for a given connection type in Glue. The response includes authentication configuration details that show supported authentication types and properties, and RestConfiguration for custom REST-based connection types registered via RegisterConnectionType. See also: ListConnectionTypes, RegisterConnectionType, DeleteConnectionType

```sql
SELECT
AthenaConnectionProperties,
AuthenticationConfiguration,
Capabilities,
ComputeEnvironmentConfigurations,
ConnectionOptions,
ConnectionProperties,
ConnectionType,
Description,
PhysicalConnectionRequirements,
PythonConnectionProperties,
RestConfiguration,
SparkConnectionProperties
FROM aws.glue.connection_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connection_types">

The ListConnectionTypes API provides a discovery mechanism to learn available connection types in Glue. The response contains a list of connection types with high-level details of what is supported for each connection type, including both built-in connection types and custom connection types registered via RegisterConnectionType. The connection types listed are the set of supported options for the ConnectionType value in the CreateConnection API. See also: DescribeConnectionType, RegisterConnectionType, DeleteConnectionType

```sql
SELECT
Capabilities,
Categories,
ConnectionType,
ConnectionTypeVariants,
Description,
DisplayName,
LogoUrl,
Vendor
FROM aws.glue.connection_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_connection_type"
    values={[
        { label: 'register_connection_type', value: 'register_connection_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_connection_type">

Registers a custom connection type in Glue based on the configuration provided. This operation enables customers to configure custom connectors for any data source with REST-based APIs, eliminating the need for building custom Lambda connectors. The registered connection type stores details about how requests and responses are interpreted by REST sources, including connection properties, authentication configuration, and REST configuration with entity definitions. Once registered, customers can create connections using this connection type and work with them the same way as natively supported Glue connectors. Supports multiple authentication types including Basic, OAuth2 (Client Credentials, JWT Bearer, Authorization Code), and Custom Auth configurations.

```sql
INSERT INTO aws.glue.connection_types (
ConnectionType,
IntegrationType,
Description,
ConnectionProperties,
ConnectorAuthenticationConfiguration,
RestConfiguration,
Tags,
region
)
SELECT 
'{{ ConnectionType }}' /* required */,
'{{ IntegrationType }}' /* required */,
'{{ Description }}',
'{{ ConnectionProperties }}' /* required */,
'{{ ConnectorAuthenticationConfiguration }}' /* required */,
'{{ RestConfiguration }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ConnectionTypeArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connection_types
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connection_types resource.
    - name: ConnectionType
      value: "{{ ConnectionType }}"
      description: |
        The name of the connection type. Must be between 1 and 255 characters and must be prefixed with "REST-" to indicate it is a REST-based connector.
    - name: IntegrationType
      value: "{{ IntegrationType }}"
      description: |
        The integration type for the connection. Currently only "REST" protocol is supported.
      valid_values: ['REST']
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the connection type. Can be up to 2048 characters and provides details about the purpose and functionality of the connection type.
    - name: ConnectionProperties
      description: |
        Defines the base URL and additional request parameters needed during connection creation for this connection type.
      value:
        Url:
          Name: "{{ Name }}"
          KeyOverride: "{{ KeyOverride }}"
          Required: {{ Required }}
          DefaultValue: "{{ DefaultValue }}"
          AllowedValues:
            - "{{ AllowedValues }}"
          PropertyLocation: "{{ PropertyLocation }}"
          PropertyType: "{{ PropertyType }}"
        AdditionalRequestParameters:
          - Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues: "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
    - name: ConnectorAuthenticationConfiguration
      description: |
        Defines the supported authentication types and required properties for this connection type, including Basic, OAuth2, and Custom authentication methods.
      value:
        AuthenticationTypes:
          - "{{ AuthenticationTypes }}"
        OAuth2Properties:
          OAuth2GrantType: "{{ OAuth2GrantType }}"
          ClientCredentialsProperties:
            TokenUrl:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            RequestMethod: "{{ RequestMethod }}"
            ContentType: "{{ ContentType }}"
            ClientId:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            ClientSecret:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            Scope:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            TokenUrlParameters:
              - Name: "{{ Name }}"
                KeyOverride: "{{ KeyOverride }}"
                Required: {{ Required }}
                DefaultValue: "{{ DefaultValue }}"
                AllowedValues: "{{ AllowedValues }}"
                PropertyLocation: "{{ PropertyLocation }}"
                PropertyType: "{{ PropertyType }}"
          JWTBearerProperties:
            TokenUrl:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            RequestMethod: "{{ RequestMethod }}"
            ContentType: "{{ ContentType }}"
            JwtToken:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            TokenUrlParameters:
              - Name: "{{ Name }}"
                KeyOverride: "{{ KeyOverride }}"
                Required: {{ Required }}
                DefaultValue: "{{ DefaultValue }}"
                AllowedValues: "{{ AllowedValues }}"
                PropertyLocation: "{{ PropertyLocation }}"
                PropertyType: "{{ PropertyType }}"
          AuthorizationCodeProperties:
            AuthorizationCodeUrl:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            AuthorizationCode:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            RedirectUri:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            TokenUrl:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            RequestMethod: "{{ RequestMethod }}"
            ContentType: "{{ ContentType }}"
            ClientId:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            ClientSecret:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            Scope:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            Prompt:
              Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues:
                - "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
            TokenUrlParameters:
              - Name: "{{ Name }}"
                KeyOverride: "{{ KeyOverride }}"
                Required: {{ Required }}
                DefaultValue: "{{ DefaultValue }}"
                AllowedValues: "{{ AllowedValues }}"
                PropertyLocation: "{{ PropertyLocation }}"
                PropertyType: "{{ PropertyType }}"
        BasicAuthenticationProperties:
          Username:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          Password:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
        CustomAuthenticationProperties:
          AuthenticationParameters:
            - Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues: "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
    - name: RestConfiguration
      description: |
        Defines the HTTP request and response configuration, validation endpoint, and entity configurations for REST API interactions.
      value:
        GlobalSourceConfiguration:
          RequestMethod: "{{ RequestMethod }}"
          RequestPath: "{{ RequestPath }}"
          RequestParameters:
            - Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues: "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
          ResponseConfiguration:
            ResultPath: "{{ ResultPath }}"
            ErrorPath: "{{ ErrorPath }}"
          PaginationConfiguration:
            CursorConfiguration:
              NextPage:
                Key: "{{ Key }}"
                DefaultValue: "{{ DefaultValue }}"
                PropertyLocation: "{{ PropertyLocation }}"
                Value: "{{ Value }}"
              LimitParameter:
                Key: "{{ Key }}"
                DefaultValue: "{{ DefaultValue }}"
                PropertyLocation: "{{ PropertyLocation }}"
                Value: "{{ Value }}"
            OffsetConfiguration:
              OffsetParameter:
                Key: "{{ Key }}"
                DefaultValue: "{{ DefaultValue }}"
                PropertyLocation: "{{ PropertyLocation }}"
                Value: "{{ Value }}"
              LimitParameter:
                Key: "{{ Key }}"
                DefaultValue: "{{ DefaultValue }}"
                PropertyLocation: "{{ PropertyLocation }}"
                Value: "{{ Value }}"
        ValidationEndpointConfiguration:
          RequestMethod: "{{ RequestMethod }}"
          RequestPath: "{{ RequestPath }}"
          RequestParameters:
            - Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues: "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
          ResponseConfiguration:
            ResultPath: "{{ ResultPath }}"
            ErrorPath: "{{ ErrorPath }}"
          PaginationConfiguration:
            CursorConfiguration:
              NextPage:
                Key: "{{ Key }}"
                DefaultValue: "{{ DefaultValue }}"
                PropertyLocation: "{{ PropertyLocation }}"
                Value: "{{ Value }}"
              LimitParameter:
                Key: "{{ Key }}"
                DefaultValue: "{{ DefaultValue }}"
                PropertyLocation: "{{ PropertyLocation }}"
                Value: "{{ Value }}"
            OffsetConfiguration:
              OffsetParameter:
                Key: "{{ Key }}"
                DefaultValue: "{{ DefaultValue }}"
                PropertyLocation: "{{ PropertyLocation }}"
                Value: "{{ Value }}"
              LimitParameter:
                Key: "{{ Key }}"
                DefaultValue: "{{ DefaultValue }}"
                PropertyLocation: "{{ PropertyLocation }}"
                Value: "{{ Value }}"
        EntityConfigurations: "{{ EntityConfigurations }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags you assign to the connection type.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection_type"
    values={[
        { label: 'delete_connection_type', value: 'delete_connection_type' }
    ]}
>
<TabItem value="delete_connection_type">

Deletes a custom connection type in Glue. The connection type must exist and be registered before it can be deleted. This operation supports cleanup of connection type resources and helps maintain proper lifecycle management of custom connection types.

```sql
DELETE FROM aws.glue.connection_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
