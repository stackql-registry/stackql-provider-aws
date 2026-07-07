--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - qbusiness
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

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
    <td><CopyableCode code="applicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q Business application. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attachmentsConfiguration" /></td>
    <td><code>object</code></td>
    <td>Settings for whether end users can upload files directly during chat.</td>
</tr>
<tr>
    <td><CopyableCode code="autoSubscriptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Settings for auto-subscription behavior for this application. This is only applicable to SAML and OIDC applications.</td>
</tr>
<tr>
    <td><CopyableCode code="clientIdsForOIDC" /></td>
    <td><code>array</code></td>
    <td>The OIDC client ID for a Amazon Q Business application.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business application was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the Amazon Q Business application. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Q Business application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Provides the identifier of the KMS key used to encrypt data indexed by Amazon Q Business. Amazon Q Business doesn't support asymmetric keys.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>If the Status field is set to ERROR, the ErrorMessage field contains a description of the error that caused the synchronization to fail.</td>
</tr>
<tr>
    <td><CopyableCode code="iamIdentityProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:iam::\d&#123;12&#125;:(oidc-provider|saml-provider)/&#91;a-zA-Z0-9_\.\/@\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identityCenterApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AWS IAM Identity Center instance attached to your Amazon Q Business application. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:sso::\d&#123;12&#125;:application/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/apl-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identityType" /></td>
    <td><code>string</code></td>
    <td>The authentication type being used by a Amazon Q Business application. (AWS_IAM_IDP_SAML, AWS_IAM_IDP_OIDC, AWS_IAM_IDC, AWS_QUICKSIGHT_IDP, ANONYMOUS)</td>
</tr>
<tr>
    <td><CopyableCode code="personalizationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration information about chat response personalization. For more information, see Personalizing chat responses.</td>
</tr>
<tr>
    <td><CopyableCode code="qAppsConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration information about Amazon Q Apps.</td>
</tr>
<tr>
    <td><CopyableCode code="quickSightConfiguration" /></td>
    <td><code>object</code></td>
    <td>The Amazon Quick Suite configuration for an Amazon Q Business application that uses Quick Suite as the identity provider. For more information, see Creating an Amazon Quick Suite integrated application.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM with permissions to access your CloudWatch logs and metrics. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon Q Business application. (CREATING, ACTIVE, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business application was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Amazon Q Business application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Q Business application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identityType" /></td>
    <td><code>string</code></td>
    <td>The authentication type being used by a Amazon Q Business application. (AWS_IAM_IDP_SAML, AWS_IAM_IDP_OIDC, AWS_IAM_IDC, AWS_QUICKSIGHT_IDP, ANONYMOUS)</td>
</tr>
<tr>
    <td><CopyableCode code="quickSightConfiguration" /></td>
    <td><code>object</code></td>
    <td>The Amazon Quick Suite configuration for an Amazon Q Business application that uses Quick Suite as the identity provider. For more information, see Creating an Amazon Quick Suite integrated application.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon Q Business application. The application is ready to use when the status is ACTIVE. (CREATING, ACTIVE, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business application was last updated.</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an existing Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists Amazon Q Business applications. Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see Cross region inference in Amazon Q Business.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td></td>
    <td>Creates an Amazon Q Business application. There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see Amazon Q Business tiers. You must use the Amazon Q Business console to assign subscription tiers to users. An Amazon Q Apps service linked role will be created if it's absent in the Amazon Web Services account when QAppsConfiguration is enabled in the request. For more information, see Using service-linked roles for Q Apps. When you create an application, Amazon Q Business may securely transmit data for processing from your selected Amazon Web Services region, but within your geography. For more information, see Cross region inference in Amazon Q Business.</td>
</tr>
<tr>
    <td><a href="#associate_permission"><CopyableCode code="associate_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-statementId"><code>statementId</code></a>, <a href="#parameter-actions"><code>actions</code></a>, <a href="#parameter-principal"><code>principal</code></a></td>
    <td></td>
    <td>Adds or updates a permission policy for a Amazon Q Business application, allowing cross-account access for an ISV. This operation creates a new policy statement for the specified Amazon Q Business application. The policy statement defines the IAM actions that the ISV is allowed to perform on the Amazon Q Business application's resources.</td>
</tr>
<tr>
    <td><a href="#disassociate_permission"><CopyableCode code="disassociate_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-statement_id"><code>statement_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a permission policy from a Amazon Q Business application, revoking the cross-account access that was previously granted to an ISV. This operation deletes the specified policy statement from the application's permission policy.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Q Business application. Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see Cross region inference in Amazon Q Business. An Amazon Q Apps service-linked role will be created if it's absent in the Amazon Web Services account when QAppsConfiguration is enabled in the request. For more information, see Using service-linked roles for Q Apps.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#batch_delete_document"><CopyableCode code="batch_delete_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-documents"><code>documents</code></a></td>
    <td></td>
    <td>Asynchronously deletes one or more documents added using the BatchPutDocument API from an Amazon Q Business index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.</td>
</tr>
<tr>
    <td><a href="#batch_put_document"><CopyableCode code="batch_put_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-documents"><code>documents</code></a></td>
    <td></td>
    <td>Adds one or more documents to an Amazon Q Business index. You use this API to: ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q Business index. add custom attributes to documents in an Amazon Q Business index. attach an access control list to the documents added to an Amazon Q Business index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.</td>
</tr>
<tr>
    <td><a href="#chat"><CopyableCode code="chat" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-userGroups"><code>userGroups</code></a>, <a href="#parameter-conversationId"><code>conversationId</code></a>, <a href="#parameter-parentMessageId"><code>parentMessageId</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Starts or continues a streaming Amazon Q Business conversation.</td>
</tr>
<tr>
    <td><a href="#chat_sync"><CopyableCode code="chat_sync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-userGroups"><code>userGroups</code></a></td>
    <td>Starts or continues a non-streaming Amazon Q Business conversation.</td>
</tr>
<tr>
    <td><a href="#check_document_access"><CopyableCode code="check_document_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dataSourceId"><code>dataSourceId</code></a></td>
    <td>Verifies if a user has access permissions for a specified document and returns the actual ACL attached to the document. Resolves user access on the document via user aliases and groups when verifying user access.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application. This is required to identify the specific Amazon Q Business application context for the document access check.</td>
</tr>
<tr id="parameter-document_id">
    <td><CopyableCode code="document_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the document. Specifies which document's access permissions are being checked.</td>
</tr>
<tr id="parameter-index_id">
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the index. Used to locate the correct index within the application where the document is stored.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-statement_id">
    <td><CopyableCode code="statement_id" /></td>
    <td><code>string</code></td>
    <td>The statement ID of the permission to remove.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user. Used to check the access permissions for this specific user against the document's ACL.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A token that you provide to identify the chat input.</td>
</tr>
<tr id="parameter-conversationId">
    <td><CopyableCode code="conversationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business conversation.</td>
</tr>
<tr id="parameter-dataSourceId">
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data source. Identifies the specific data source from which the document originates. Should not be used when a document is uploaded directly with BatchPutDocument, as no dataSourceId is available or necessary.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Amazon Q Business applications to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business applications.</td>
</tr>
<tr id="parameter-parentMessageId">
    <td><CopyableCode code="parentMessageId" /></td>
    <td><code>string</code></td>
    <td>The identifier used to associate a user message with a AI generated response.</td>
</tr>
<tr id="parameter-userGroups">
    <td><CopyableCode code="userGroups" /></td>
    <td><code>array</code></td>
    <td>The group names that a user associated with the chat input belongs to.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user attached to the chat input.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Gets information about an existing Amazon Q Business application.

```sql
SELECT
applicationArn,
applicationId,
attachmentsConfiguration,
autoSubscriptionConfiguration,
clientIdsForOIDC,
createdAt,
description,
displayName,
encryptionConfiguration,
error,
iamIdentityProviderArn,
identityCenterApplicationArn,
identityType,
personalizationConfiguration,
qAppsConfiguration,
quickSightConfiguration,
roleArn,
status,
updatedAt
FROM aws.qbusiness.applications
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists Amazon Q Business applications. Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see Cross region inference in Amazon Q Business.

```sql
SELECT
applicationId,
createdAt,
displayName,
identityType,
quickSightConfiguration,
status,
updatedAt
FROM aws.qbusiness.applications
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an Amazon Q Business application. There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see Amazon Q Business tiers. You must use the Amazon Q Business console to assign subscription tiers to users. An Amazon Q Apps service linked role will be created if it's absent in the Amazon Web Services account when QAppsConfiguration is enabled in the request. For more information, see Using service-linked roles for Q Apps. When you create an application, Amazon Q Business may securely transmit data for processing from your selected Amazon Web Services region, but within your geography. For more information, see Cross region inference in Amazon Q Business.

```sql
INSERT INTO aws.qbusiness.applications (
displayName,
roleArn,
identityType,
iamIdentityProviderArn,
identityCenterInstanceArn,
clientIdsForOIDC,
description,
encryptionConfiguration,
tags,
clientToken,
attachmentsConfiguration,
qAppsConfiguration,
personalizationConfiguration,
quickSightConfiguration,
region
)
SELECT 
'{{ displayName }}' /* required */,
'{{ roleArn }}',
'{{ identityType }}',
'{{ iamIdentityProviderArn }}',
'{{ identityCenterInstanceArn }}',
'{{ clientIdsForOIDC }}',
'{{ description }}',
'{{ encryptionConfiguration }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ attachmentsConfiguration }}',
'{{ qAppsConfiguration }}',
'{{ personalizationConfiguration }}',
'{{ quickSightConfiguration }}',
'{{ region }}'
RETURNING
applicationArn,
applicationId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: identityType
      value: "{{ identityType }}"
      valid_values: ['AWS_IAM_IDP_SAML', 'AWS_IAM_IDP_OIDC', 'AWS_IAM_IDC', 'AWS_QUICKSIGHT_IDP', 'ANONYMOUS']
    - name: iamIdentityProviderArn
      value: "{{ iamIdentityProviderArn }}"
    - name: identityCenterInstanceArn
      value: "{{ identityCenterInstanceArn }}"
    - name: clientIdsForOIDC
      value:
        - "{{ clientIdsForOIDC }}"
    - name: description
      value: "{{ description }}"
    - name: encryptionConfiguration
      description: |
        Provides the identifier of the KMS key used to encrypt data indexed by Amazon Q Business. Amazon Q Business doesn't support asymmetric keys.
      value:
        kmsKeyId: "{{ kmsKeyId }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: attachmentsConfiguration
      description: |
        Configuration information for the file upload during chat feature.
      value:
        attachmentsControlMode: "{{ attachmentsControlMode }}"
    - name: qAppsConfiguration
      description: |
        Configuration information about Amazon Q Apps.
      value:
        qAppsControlMode: "{{ qAppsControlMode }}"
    - name: personalizationConfiguration
      description: |
        Configuration information about chat response personalization. For more information, see Personalizing chat responses.
      value:
        personalizationControlMode: "{{ personalizationControlMode }}"
    - name: quickSightConfiguration
      description: |
        The Amazon Quick Suite configuration for an Amazon Q Business application that uses Quick Suite as the identity provider. For more information, see Creating an Amazon Quick Suite integrated application.
      value:
        clientNamespace: "{{ clientNamespace }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_permission"
    values={[
        { label: 'associate_permission', value: 'associate_permission' },
        { label: 'disassociate_permission', value: 'disassociate_permission' },
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="associate_permission">

Adds or updates a permission policy for a Amazon Q Business application, allowing cross-account access for an ISV. This operation creates a new policy statement for the specified Amazon Q Business application. The policy statement defines the IAM actions that the ISV is allowed to perform on the Amazon Q Business application's resources.

```sql
UPDATE aws.qbusiness.applications
SET 
statementId = '{{ statementId }}',
actions = '{{ actions }}',
conditions = '{{ conditions }}',
principal = '{{ principal }}'
WHERE 
application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
AND statementId = '{{ statementId }}' --required
AND actions = '{{ actions }}' --required
AND principal = '{{ principal }}' --required
RETURNING
statement;
```
</TabItem>
<TabItem value="disassociate_permission">

Removes a permission policy from a Amazon Q Business application, revoking the cross-account access that was previously granted to an ISV. This operation deletes the specified policy statement from the application's permission policy.

```sql
UPDATE aws.qbusiness.applications
SET 
-- No updatable properties
WHERE 
application_id = '{{ application_id }}' --required
AND statement_id = '{{ statement_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_application">

Updates an existing Amazon Q Business application. Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see Cross region inference in Amazon Q Business. An Amazon Q Apps service-linked role will be created if it's absent in the Amazon Web Services account when QAppsConfiguration is enabled in the request. For more information, see Using service-linked roles for Q Apps.

```sql
UPDATE aws.qbusiness.applications
SET 
identityCenterInstanceArn = '{{ identityCenterInstanceArn }}',
displayName = '{{ displayName }}',
description = '{{ description }}',
roleArn = '{{ roleArn }}',
attachmentsConfiguration = '{{ attachmentsConfiguration }}',
qAppsConfiguration = '{{ qAppsConfiguration }}',
personalizationConfiguration = '{{ personalizationConfiguration }}',
autoSubscriptionConfiguration = '{{ autoSubscriptionConfiguration }}'
WHERE 
application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes an Amazon Q Business application.

```sql
DELETE FROM aws.qbusiness.applications
WHERE application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_document"
    values={[
        { label: 'batch_delete_document', value: 'batch_delete_document' },
        { label: 'batch_put_document', value: 'batch_put_document' },
        { label: 'chat', value: 'chat' },
        { label: 'chat_sync', value: 'chat_sync' },
        { label: 'check_document_access', value: 'check_document_access' }
    ]}
>
<TabItem value="batch_delete_document">

Asynchronously deletes one or more documents added using the BatchPutDocument API from an Amazon Q Business index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.

```sql
EXEC aws.qbusiness.applications.batch_delete_document 
@application_id='{{ application_id }}' --required, 
@index_id='{{ index_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"documents": "{{ documents }}", 
"dataSourceSyncId": "{{ dataSourceSyncId }}"
}'
;
```
</TabItem>
<TabItem value="batch_put_document">

Adds one or more documents to an Amazon Q Business index. You use this API to: ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q Business index. add custom attributes to documents in an Amazon Q Business index. attach an access control list to the documents added to an Amazon Q Business index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.

```sql
EXEC aws.qbusiness.applications.batch_put_document 
@application_id='{{ application_id }}' --required, 
@index_id='{{ index_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"documents": "{{ documents }}", 
"roleArn": "{{ roleArn }}", 
"dataSourceSyncId": "{{ dataSourceSyncId }}"
}'
;
```
</TabItem>
<TabItem value="chat">

Starts or continues a streaming Amazon Q Business conversation.

```sql
EXEC aws.qbusiness.applications.chat 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required, 
@userId='{{ userId }}', 
@userGroups='{{ userGroups }}', 
@conversationId='{{ conversationId }}', 
@parentMessageId='{{ parentMessageId }}', 
@clientToken='{{ clientToken }}' 
@@json=
'{
"inputStream": "{{ inputStream }}"
}'
;
```
</TabItem>
<TabItem value="chat_sync">

Starts or continues a non-streaming Amazon Q Business conversation.

```sql
EXEC aws.qbusiness.applications.chat_sync 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required, 
@userId='{{ userId }}', 
@userGroups='{{ userGroups }}' 
@@json=
'{
"userMessage": "{{ userMessage }}", 
"attachments": "{{ attachments }}", 
"actionExecution": "{{ actionExecution }}", 
"authChallengeResponse": "{{ authChallengeResponse }}", 
"conversationId": "{{ conversationId }}", 
"parentMessageId": "{{ parentMessageId }}", 
"attributeFilter": "{{ attributeFilter }}", 
"chatMode": "{{ chatMode }}", 
"chatModeConfiguration": "{{ chatModeConfiguration }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="check_document_access">

Verifies if a user has access permissions for a specified document and returns the actual ACL attached to the document. Resolves user access on the document via user aliases and groups when verifying user access.

```sql
EXEC aws.qbusiness.applications.check_document_access 
@application_id='{{ application_id }}' --required, 
@index_id='{{ index_id }}' --required, 
@user_id='{{ user_id }}' --required, 
@document_id='{{ document_id }}' --required, 
@region='{{ region }}' --required, 
@dataSourceId='{{ dataSourceId }}'
;
```
</TabItem>
</Tabs>
