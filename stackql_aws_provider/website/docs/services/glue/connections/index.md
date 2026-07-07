--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' }
    ]}
>
<TabItem value="get_connection">

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
    <td><CopyableCode code="AthenaProperties" /></td>
    <td><code>object</code></td>
    <td>Connection properties specific to the Athena compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthenticationConfiguration" /></td>
    <td><code>object</code></td>
    <td>The authentication properties of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="CompatibleComputeEnvironments" /></td>
    <td><code>array</code></td>
    <td>A list of compute environments compatible with the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionProperties" /></td>
    <td><code>object</code></td>
    <td>These key-value pairs define parameters for the connection when using the version 1 Connection schema: HOST - The host URI: either the fully qualified domain name (FQDN) or the IPv4 address of the database host. PORT - The port number, between 1024 and 65535, of the port on which the database host is listening for database connections. USER_NAME - The name under which to log in to the database. The value string for USER_NAME is "USERNAME". PASSWORD - A password, if one is used, for the user name. ENCRYPTED_PASSWORD - When you enable connection password protection by setting ConnectionPasswordEncryption in the Data Catalog encryption settings, this field stores the encrypted password. JDBC_DRIVER_JAR_URI - The Amazon Simple Storage Service (Amazon S3) path of the JAR file that contains the JDBC driver to use. JDBC_DRIVER_CLASS_NAME - The class name of the JDBC driver to use. JDBC_ENGINE - The name of the JDBC engine to use. JDBC_ENGINE_VERSION - The version of the JDBC engine to use. CONFIG_FILES - (Reserved for future use.) INSTANCE_ID - The instance ID to use. JDBC_CONNECTION_URL - The URL for connecting to a JDBC data source. JDBC_ENFORCE_SSL - A case-insensitive Boolean string (true, false) specifying whether Secure Sockets Layer (SSL) with hostname matching is enforced for the JDBC connection on the client. The default is false. CUSTOM_JDBC_CERT - An Amazon S3 location specifying the customer's root certificate. Glue uses this root certificate to validate the customer’s certificate when connecting to the customer database. Glue only handles X.509 certificates. The certificate provided must be DER-encoded and supplied in Base64 encoding PEM format. SKIP_CUSTOM_JDBC_CERT_VALIDATION - By default, this is false. Glue validates the Signature algorithm and Subject Public Key Algorithm for the customer certificate. The only permitted algorithms for the Signature algorithm are SHA256withRSA, SHA384withRSA or SHA512withRSA. For the Subject Public Key Algorithm, the key length must be at least 2048. You can set the value of this property to true to skip Glue’s validation of the customer certificate. CUSTOM_JDBC_CERT_STRING - A custom JDBC certificate string which is used for domain match or distinguished name match to prevent a man-in-the-middle attack. In Oracle database, this is used as the SSL_SERVER_CERT_DN; in Microsoft SQL Server, this is used as the hostNameInCertificate. CONNECTION_URL - The URL for connecting to a general (non-JDBC) data source. SECRET_ID - The secret ID used for the secret manager of credentials. CONNECTOR_URL - The connector URL for a MARKETPLACE or CUSTOM connection. CONNECTOR_TYPE - The connector type for a MARKETPLACE or CUSTOM connection. CONNECTOR_CLASS_NAME - The connector class name for a MARKETPLACE or CUSTOM connection. KAFKA_BOOTSTRAP_SERVERS - A comma-separated list of host and port pairs that are the addresses of the Apache Kafka brokers in a Kafka cluster to which a Kafka client will connect to and bootstrap itself. KAFKA_SSL_ENABLED - Whether to enable or disable SSL on an Apache Kafka connection. Default value is "true". KAFKA_CUSTOM_CERT - The Amazon S3 URL for the private CA cert file (.pem format). The default is an empty string. KAFKA_SKIP_CUSTOM_CERT_VALIDATION - Whether to skip the validation of the CA cert file or not. Glue validates for three algorithms: SHA256withRSA, SHA384withRSA and SHA512withRSA. Default value is "false". KAFKA_CLIENT_KEYSTORE - The Amazon S3 location of the client keystore file for Kafka client side authentication (Optional). KAFKA_CLIENT_KEYSTORE_PASSWORD - The password to access the provided keystore (Optional). KAFKA_CLIENT_KEY_PASSWORD - A keystore can consist of multiple keys, so this is the password to access the client key to be used with the Kafka server side key (Optional). ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD - The encrypted version of the Kafka client keystore password (if the user has the Glue encrypt passwords setting selected). ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD - The encrypted version of the Kafka client key password (if the user has the Glue encrypt passwords setting selected). KAFKA_SASL_MECHANISM - "SCRAM-SHA-512", "GSSAPI", "AWS_MSK_IAM", or "PLAIN". These are the supported SASL Mechanisms. KAFKA_SASL_PLAIN_USERNAME - A plaintext username used to authenticate with the "PLAIN" mechanism. KAFKA_SASL_PLAIN_PASSWORD - A plaintext password used to authenticate with the "PLAIN" mechanism. ENCRYPTED_KAFKA_SASL_PLAIN_PASSWORD - The encrypted version of the Kafka SASL PLAIN password (if the user has the Glue encrypt passwords setting selected). KAFKA_SASL_SCRAM_USERNAME - A plaintext username used to authenticate with the "SCRAM-SHA-512" mechanism. KAFKA_SASL_SCRAM_PASSWORD - A plaintext password used to authenticate with the "SCRAM-SHA-512" mechanism. ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD - The encrypted version of the Kafka SASL SCRAM password (if the user has the Glue encrypt passwords setting selected). KAFKA_SASL_SCRAM_SECRETS_ARN - The Amazon Resource Name of a secret in Amazon Web Services Secrets Manager. KAFKA_SASL_GSSAPI_KEYTAB - The S3 location of a Kerberos keytab file. A keytab stores long-term keys for one or more principals. For more information, see MIT Kerberos Documentation: Keytab. KAFKA_SASL_GSSAPI_KRB5_CONF - The S3 location of a Kerberos krb5.conf file. A krb5.conf stores Kerberos configuration information, such as the location of the KDC server. For more information, see MIT Kerberos Documentation: krb5.conf. KAFKA_SASL_GSSAPI_SERVICE - The Kerberos service name, as set with sasl.kerberos.service.name in your Kafka Configuration. KAFKA_SASL_GSSAPI_PRINCIPAL - The name of the Kerberos princial used by Glue. For more information, see Kafka Documentation: Configuring Kafka Brokers. ROLE_ARN - The role to be used for running queries. REGION - The Amazon Web Services Region where queries will be run. WORKGROUP_NAME - The name of an Amazon Redshift serverless workgroup or Amazon Athena workgroup in which queries will run. CLUSTER_IDENTIFIER - The cluster identifier of an Amazon Redshift cluster in which queries will run. DATABASE - The Amazon Redshift database that you are connecting to.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionSchemaVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the connection schema for this connection. Version 2 supports properties for specific compute environments.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionType" /></td>
    <td><code>string</code></td>
    <td>The type of the connection. Currently, SFTP is not supported. (JDBC, SFTP, MONGODB, KAFKA, NETWORK, MARKETPLACE, CUSTOM, SALESFORCE, VIEW_VALIDATION_REDSHIFT, VIEW_VALIDATION_ATHENA, GOOGLEADS, GOOGLESHEETS, GOOGLEANALYTICS4, SERVICENOW, MARKETO, SAPODATA, ZENDESK, JIRACLOUD, NETSUITEERP, HUBSPOT, FACEBOOKADS, INSTAGRAMADS, ZOHOCRM, SALESFORCEPARDOT, SALESFORCEMARKETINGCLOUD, ADOBEANALYTICS, SLACK, LINKEDIN, MIXPANEL, ASANA, STRIPE, SMARTSHEET, DATADOG, WOOCOMMERCE, INTERCOM, SNAPCHATADS, PAYPAL, QUICKBOOKS, FACEBOOKPAGEINSIGHTS, FRESHDESK, TWILIO, DOCUSIGNMONITOR, FRESHSALES, ZOOM, GOOGLESEARCHCONSOLE, SALESFORCECOMMERCECLOUD, SAPCONCUR, DYNATRACE, MICROSOFTDYNAMIC365FINANCEANDOPS, MICROSOFTTEAMS, BLACKBAUDRAISEREDGENXT, MAILCHIMP, GITLAB, PENDO, PRODUCTBOARD, CIRCLECI, PIPEDIVE, SENDGRID, AZURECOSMOS, AZURESQL, BIGQUERY, BLACKBAUD, CLOUDERAHIVE, CLOUDERAIMPALA, CLOUDWATCH, CLOUDWATCHMETRICS, CMDB, DATALAKEGEN2, DB2, DB2AS400, DOCUMENTDB, DOMO, DYNAMODB, GOOGLECLOUDSTORAGE, HBASE, KUSTOMER, MICROSOFTDYNAMICS365CRM, MONDAY, MYSQL, OKTA, OPENSEARCH, ORACLE, PIPEDRIVE, POSTGRESQL, SAPHANA, SQLSERVER, SYNAPSE, TERADATA, TERADATANOS, TIMESTREAM, TPCDS, VERTICA)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the time that this connection definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the connection. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastConnectionValidationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the time this connection was last validated.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The user, group, or role that last updated this connection definition. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last time the connection definition was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="MatchCriteria" /></td>
    <td><code>array</code></td>
    <td>A list of criteria that can be used in selecting this connection.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the connection definition. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PhysicalConnectionRequirements" /></td>
    <td><code>object</code></td>
    <td>The physical connection requirements, such as virtual private cloud (VPC) and SecurityGroup, that are needed to make this connection successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="PythonProperties" /></td>
    <td><code>object</code></td>
    <td>Connection properties specific to the Python compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="SparkProperties" /></td>
    <td><code>object</code></td>
    <td>Connection properties specific to the Spark compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the connection. Can be one of: READY, IN_PROGRESS, or FAILED. (READY, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the connection status.</td>
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
    <td><a href="#get_connection"><CopyableCode code="get_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a connection definition from the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionInput"><code>ConnectionInput</code></a></td>
    <td></td>
    <td>Creates a connection definition in the Data Catalog. Connections used for creating federated resources require the IAM glue:PassConnection permission.</td>
</tr>
<tr>
    <td><a href="#update_connection"><CopyableCode code="update_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionInput"><code>ConnectionInput</code></a></td>
    <td></td>
    <td>Updates a connection definition in the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a connection from the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#get_connections"><CopyableCode code="get_connections" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of connection definitions from the Data Catalog.</td>
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
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' }
    ]}
>
<TabItem value="get_connection">

Retrieves a connection definition from the Data Catalog.

```sql
SELECT
AthenaProperties,
AuthenticationConfiguration,
CompatibleComputeEnvironments,
ConnectionProperties,
ConnectionSchemaVersion,
ConnectionType,
CreationTime,
Description,
LastConnectionValidationTime,
LastUpdatedBy,
LastUpdatedTime,
MatchCriteria,
Name,
PhysicalConnectionRequirements,
PythonProperties,
SparkProperties,
Status,
StatusReason
FROM aws.glue.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection"
    values={[
        { label: 'create_connection', value: 'create_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection">

Creates a connection definition in the Data Catalog. Connections used for creating federated resources require the IAM glue:PassConnection permission.

```sql
INSERT INTO aws.glue.connections (
CatalogId,
ConnectionInput,
Tags,
region
)
SELECT 
'{{ CatalogId }}',
'{{ ConnectionInput }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
CreateConnectionStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connections resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
      description: |
        The ID of the Data Catalog in which to create the connection. If none is provided, the Amazon Web Services account ID is used by default.
    - name: ConnectionInput
      description: |
        A ConnectionInput object defining the connection to create.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        ConnectionType: "{{ ConnectionType }}"
        MatchCriteria:
          - "{{ MatchCriteria }}"
        ConnectionProperties: "{{ ConnectionProperties }}"
        SparkProperties: "{{ SparkProperties }}"
        AthenaProperties: "{{ AthenaProperties }}"
        PythonProperties: "{{ PythonProperties }}"
        PhysicalConnectionRequirements:
          SubnetId: "{{ SubnetId }}"
          SecurityGroupIdList:
            - "{{ SecurityGroupIdList }}"
          AvailabilityZone: "{{ AvailabilityZone }}"
        AuthenticationConfiguration:
          AuthenticationType: "{{ AuthenticationType }}"
          OAuth2Properties:
            OAuth2GrantType: "{{ OAuth2GrantType }}"
            OAuth2ClientApplication:
              UserManagedClientApplicationClientId: "{{ UserManagedClientApplicationClientId }}"
              AWSManagedClientApplicationReference: "{{ AWSManagedClientApplicationReference }}"
            TokenUrl: "{{ TokenUrl }}"
            TokenUrlParametersMap: "{{ TokenUrlParametersMap }}"
            AuthorizationCodeProperties:
              AuthorizationCode: "{{ AuthorizationCode }}"
              RedirectUri: "{{ RedirectUri }}"
            OAuth2Credentials:
              UserManagedClientApplicationClientSecret: "{{ UserManagedClientApplicationClientSecret }}"
              AccessToken: "{{ AccessToken }}"
              RefreshToken: "{{ RefreshToken }}"
              JwtToken: "{{ JwtToken }}"
          SecretArn: "{{ SecretArn }}"
          KmsKeyArn: "{{ KmsKeyArn }}"
          BasicAuthenticationCredentials:
            Username: "{{ Username }}"
            Password: "{{ Password }}"
          CustomAuthenticationCredentials: "{{ CustomAuthenticationCredentials }}"
        ValidateCredentials: {{ ValidateCredentials }}
        ValidateForComputeEnvironments:
          - "{{ ValidateForComputeEnvironments }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags you assign to the connection.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection"
    values={[
        { label: 'update_connection', value: 'update_connection' }
    ]}
>
<TabItem value="update_connection">

Updates a connection definition in the Data Catalog.

```sql
UPDATE aws.glue.connections
SET 
CatalogId = '{{ CatalogId }}',
Name = '{{ Name }}',
ConnectionInput = '{{ ConnectionInput }}'
WHERE 
region = '{{ region }}' --required
AND ConnectionInput = '{{ ConnectionInput }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Deletes a connection from the Data Catalog.

```sql
DELETE FROM aws.glue.connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_connections"
    values={[
        { label: 'get_connections', value: 'get_connections' }
    ]}
>
<TabItem value="get_connections">

Retrieves a list of connection definitions from the Data Catalog.

```sql
EXEC aws.glue.connections.get_connections 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"Filter": "{{ Filter }}", 
"HidePassword": {{ HidePassword }}, 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
