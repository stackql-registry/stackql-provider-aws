--- 
title: secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets
  - secretsmanager
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

Creates, updates, deletes, gets or lists a <code>secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.secretsmanager.secrets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_secret"
    values={[
        { label: 'describe_secret', value: 'describe_secret' },
        { label: 'list_secrets', value: 'list_secrets' }
    ]}
>
<TabItem value="describe_secret">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the secret was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the secret is scheduled for deletion. If it is not scheduled for deletion, this field is omitted. When you delete a secret, Secrets Manager requires a recovery window of at least 7 days before deleting the secret. Some time after the deleted date, Secrets Manager deletes the secret, including all of its versions. If a secret is scheduled for deletion, then its details, including the encrypted secret value, is not accessible. To cancel a scheduled deletion and restore access to the secret, use RestoreSecret.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalSecretRotationMetadata" /></td>
    <td><code>array</code></td>
    <td>The metadata needed to successfully rotate a managed external secret. A list of key value pairs in JSON format specified by the partner. For more information about the required information, see Managed external secrets partners.</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalSecretRotationRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role that allows Secrets Manager to rotate a secret held by a third-party partner. For more information, see Security and permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The key ID or alias ARN of the KMS key that Secrets Manager uses to encrypt the secret value. If the secret is encrypted with the Amazon Web Services managed key aws/secretsmanager, this field is omitted. Secrets created using the console use an KMS key ID.</td>
</tr>
<tr>
    <td><CopyableCode code="LastAccessedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the secret was last accessed in the Region. This field is omitted if the secret has never been retrieved in the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="LastChangedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that this secret was modified in any way.</td>
</tr>
<tr>
    <td><CopyableCode code="LastRotatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that Secrets Manager rotated the secret. If the secret isn't configured for rotation or rotation has been disabled, Secrets Manager returns null.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="NextRotationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The next rotation is scheduled to occur on or before this date. If the secret isn't configured for rotation or rotation has been disabled, Secrets Manager returns null. If rotation fails, Secrets Manager retries the entire rotation process multiple times. If rotation is unsuccessful, this date may be in the past. This date represents the latest date that rotation will occur, but it is not an approximate rotation date. In some cases, for example if you turn off automatic rotation and then turn it back on, the next rotation may occur much sooner than this date.</td>
</tr>
<tr>
    <td><CopyableCode code="OwningService" /></td>
    <td><code>string</code></td>
    <td>The ID of the service that created this secret. For more information, see Secrets managed by other Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="PrimaryRegion" /></td>
    <td><code>string</code></td>
    <td>The Region the secret is in. If a secret is replicated to other Regions, the replicas are listed in ReplicationStatus. (pattern: &lt;code&gt;^(&#91;a-z&#93;+-)+\d+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationStatus" /></td>
    <td><code>array</code></td>
    <td>A list of the replicas of this secret and their status: Failed, which indicates that the replica was not created. InProgress, which indicates that Secrets Manager is in the process of creating the replica. InSync, which indicates that the replica was created.</td>
</tr>
<tr>
    <td><CopyableCode code="RotationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether automatic rotation is turned on for this secret. If the secret has never been configured for rotation, Secrets Manager returns null. To turn on rotation, use RotateSecret. To turn off rotation, use CancelRotateSecret.</td>
</tr>
<tr>
    <td><CopyableCode code="RotationLambdaARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Lambda function that Secrets Manager invokes to rotate the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="RotationRules" /></td>
    <td><code>object</code></td>
    <td>The rotation schedule and Lambda function for this secret. If the secret previously had rotation turned on, but it is now turned off, this field shows the previous rotation schedule and rotation function. If the secret never had rotation turned on, this field is omitted.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The list of tags attached to the secret. To add tags to a secret, use TagResource. To remove tags, use UntagResource.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The exact string that identifies the partner that holds the external secret. For more information, see Using Secrets Manager managed external secrets.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionIdsToStages" /></td>
    <td><code>object</code></td>
    <td>A list of the versions of the secret that have staging labels attached. Versions that don't have staging labels are considered deprecated and Secrets Manager can delete them. Secrets Manager uses staging labels to indicate the status of a secret version during rotation. The three staging labels for rotation are: AWSCURRENT, which indicates the current version of the secret. AWSPENDING, which indicates the version of the secret that contains new secret information that will become the next current version when rotation finishes. During rotation, Secrets Manager creates an AWSPENDING version ID before creating the new secret version. To check if a secret version exists, call GetSecretValue. AWSPREVIOUS, which indicates the previous current version of the secret. You can use this as the last known good version. For more information about rotation and staging labels, see How rotation works.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_secrets">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when a secret was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the deletion of the secret occurred. Not present on active secrets. The secret can be recovered until the number of days in the recovery window has passed, as specified in the RecoveryWindowInDays parameter of the DeleteSecret operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The user-provided description of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalSecretRotationMetadata" /></td>
    <td><code>array</code></td>
    <td>The metadata needed to successfully rotate a managed external secret. A list of key value pairs in JSON format specified by the partner. For more information about the required information, see Managed external secrets partners.</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalSecretRotationRoleArn" /></td>
    <td><code>string</code></td>
    <td>The role that Secrets Manager assumes to call APIs required to perform the rotation. For more information about the required information, see Managed external secrets partners.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key that Secrets Manager uses to encrypt the secret value. If the secret is encrypted with the Amazon Web Services managed key aws/secretsmanager, this field is omitted.</td>
</tr>
<tr>
    <td><CopyableCode code="LastAccessedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the secret was last accessed in the Region. This field is omitted if the secret has never been retrieved in the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="LastChangedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that this secret was modified in any way.</td>
</tr>
<tr>
    <td><CopyableCode code="LastRotatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date and time that the Secrets Manager rotation process was successfully completed. This value is null if the secret hasn't ever rotated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="NextRotationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The next rotation is scheduled to occur on or before this date. If the secret isn't configured for rotation or rotation has been disabled, Secrets Manager returns null.</td>
</tr>
<tr>
    <td><CopyableCode code="OwningService" /></td>
    <td><code>string</code></td>
    <td>Returns the name of the service that created the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="PrimaryRegion" /></td>
    <td><code>string</code></td>
    <td>The Region where Secrets Manager originated the secret. (pattern: &lt;code&gt;^(&#91;a-z&#93;+-)+\d+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RotationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether automatic, scheduled rotation is enabled for this secret.</td>
</tr>
<tr>
    <td><CopyableCode code="RotationLambdaARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of an Amazon Web Services Lambda function invoked by Secrets Manager to rotate and expire the secret either automatically per the schedule or manually by a call to RotateSecret .</td>
</tr>
<tr>
    <td><CopyableCode code="RotationRules" /></td>
    <td><code>object</code></td>
    <td>A structure that defines the rotation configuration for the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="SecretVersionsToStages" /></td>
    <td><code>object</code></td>
    <td>A list of all of the currently assigned SecretVersionStage staging labels and the SecretVersionId attached to each one. Staging labels are used to keep track of the different versions during the rotation process. A version that does not have any SecretVersionStage is considered deprecated and subject to deletion. Such versions are not included in this list.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The list of user-defined tags associated with the secret. To add tags to a secret, use TagResource . To remove tags, use UntagResource .</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The exact string that identifies the third-party partner that holds the external secret. For more information, see Managed external secret partners.</td>
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
    <td><a href="#describe_secret"><CopyableCode code="describe_secret" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager only returns fields that have a value in the response. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:DescribeSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#list_secrets"><CopyableCode code="list_secrets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console. All Secrets Manager operations are eventually consistent. ListSecrets might not reflect changes from the last five minutes. You can get more recent information for a specific secret by calling DescribeSecret. To list the versions of a secret, use ListSecretVersionIds. To retrieve the values for the secrets, call BatchGetSecretValue or GetSecretValue. For information about finding secrets in the console, see Find secrets in Secrets Manager. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:ListSecrets. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#create_secret"><CopyableCode code="create_secret" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new secret. A secret can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service, which Secrets Manager doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret. For secrets that use managed rotation, you need to create the secret through the managing service. For more information, see Secrets Manager secrets managed by other Amazon Web Services services. For information about creating a secret in the console, see Create a secret. To create a secret, you can provide the secret value to be encrypted in either the SecretString parameter or the SecretBinary parameter, but not both. If you include SecretString or SecretBinary then Secrets Manager creates an initial secret version and automatically attaches the staging label AWSCURRENT to it. For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the SecretString matches the JSON structure of a database secret. If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key aws/secretsmanager. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use aws/secretsmanager. Creating aws/secretsmanager can result in a one-time significant delay in returning the result. If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use aws/secretsmanager to encrypt the secret, and you must create and use a customer managed KMS key. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary or SecretString because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:CreateSecret. If you include tags in the secret, you also need secretsmanager:TagResource. To add replica Regions, you must also have secretsmanager:ReplicateSecretToRegions. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. To encrypt the secret with a KMS key other than aws/secretsmanager, you need kms:GenerateDataKey and kms:Decrypt permission to the key. When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets.</td>
</tr>
<tr>
    <td><a href="#remove_regions_from_replication"><CopyableCode code="remove_regions_from_replication" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a>, <a href="#parameter-RemoveReplicaRegions"><code>RemoveReplicaRegions</code></a></td>
    <td></td>
    <td>For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:RemoveRegionsFromReplication. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#update_secret_version_stage"><CopyableCode code="update_secret_version_stage" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a>, <a href="#parameter-VersionStage"><code>VersionStage</code></a></td>
    <td></td>
    <td>Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process. Each staging label can be attached to only one version at a time. To add a staging label to a version when it is already attached to another version, Secrets Manager first removes it from the other version first and then attaches it to this one. For more information about versions and staging labels, see Concepts: Version. The staging labels that you specify in the VersionStage parameter are added to the existing list of staging labels for the version. You can move the AWSCURRENT staging label to this version by including it in this call. Whenever you move AWSCURRENT, Secrets Manager automatically moves the label AWSPREVIOUS to the version that AWSCURRENT was removed from. If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:UpdateSecretVersionStage. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#update_secret"><CopyableCode code="update_secret" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a></td>
    <td></td>
    <td>Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use PutSecretValue. To change the rotation configuration of a secret, use RotateSecret instead. To change a secret so that it is managed by another service, you need to recreate the secret in that service. See Secrets Manager secrets managed by other Amazon Web Services services. We recommend you avoid calling UpdateSecret at a sustained rate of more than once every 10 minutes. When you call UpdateSecret to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions. If you include SecretString or SecretBinary to create a new secret version, Secrets Manager automatically moves the staging label AWSCURRENT to the new version. Then it attaches the label AWSPREVIOUS to the version that AWSCURRENT was removed from. If you call this operation with a ClientRequestToken that matches an existing version's VersionId, the operation results in an error. You can't modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See UpdateSecretVersionStage. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary or SecretString because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:UpdateSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. If you use a customer managed key, you must also have kms:GenerateDataKey, kms:Encrypt, and kms:Decrypt permissions on the key. If you change the KMS key and you don't have kms:Encrypt permission to the new key, Secrets Manager does not re-encrypt existing secret versions with the new key. For more information, see Secret encryption and decryption. When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets.</td>
</tr>
<tr>
    <td><a href="#delete_secret"><CopyableCode code="delete_secret" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a secret and all of its versions. You can specify a recovery window during which you can restore the secret. The minimum recovery window is 7 days. The default recovery window is 30 days. Secrets Manager attaches a DeletionDate stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently. You can't delete a primary secret that is replicated to other Regions. You must first delete the replicas using RemoveRegionsFromReplication, and then delete the primary secret. When you delete a replica, it is deleted immediately. You can't directly delete a version of a secret. Instead, you remove all staging labels from the version using UpdateSecretVersionStage. This marks the version as deprecated, and then Secrets Manager can automatically delete the version in the background. To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window. For more information, see Monitor secrets scheduled for deletion. Secrets Manager performs the permanent secret deletion at the end of the waiting period as a background task with low priority. There is no guarantee of a specific time after the recovery window for the permanent delete to occur. At any time before recovery window ends, you can use RestoreSecret to remove the DeletionDate and cancel the deletion of the secret. When a secret is scheduled for deletion, you cannot retrieve the secret value. You must first cancel the deletion with RestoreSecret and then you can retrieve the secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:DeleteSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#cancel_rotate_secret"><CopyableCode code="cancel_rotate_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a></td>
    <td></td>
    <td>Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation. If you cancel a rotation in progress, it can leave the VersionStage labels in an unexpected state. You might need to remove the staging label AWSPENDING from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label AWSCURRENT to the version that has AWSPENDING. To determine which version has a specific staging label, call ListSecretVersionIds. Then use UpdateSecretVersionStage to change staging labels. For more information, see How rotation works. To turn on automatic rotation again, call RotateSecret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:CancelRotateSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#replicate_secret_to_regions"><CopyableCode code="replicate_secret_to_regions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a>, <a href="#parameter-AddReplicaRegions"><code>AddReplicaRegions</code></a></td>
    <td></td>
    <td>Replicates the secret to a new Regions. See Multi-Region secrets. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:ReplicateSecretToRegions. If the primary secret is encrypted with a KMS key other than aws/secretsmanager, you also need kms:Decrypt permission to the key. To encrypt the replicated secret with a KMS key other than aws/secretsmanager, you need kms:GenerateDataKey and kms:Encrypt to the key. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#restore_secret"><CopyableCode code="restore_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a></td>
    <td></td>
    <td>Cancels the scheduled deletion of a secret by removing the DeletedDate time stamp. You can access a secret again after it has been restored. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:RestoreSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#rotate_secret"><CopyableCode code="rotate_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a></td>
    <td></td>
    <td>Configures and starts the asynchronous process of rotating the secret. For information about rotation, see Rotate secrets in the Secrets Manager User Guide. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret. When rotation is successful, the AWSPENDING staging label might be attached to the same version as the AWSCURRENT version, or it might not be attached to any version. If the AWSPENDING staging label is present but not attached to the same version as AWSCURRENT, then any later invocation of RotateSecret assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the AWSPENDING staging label might be attached to an empty secret version. For more information, see Troubleshoot rotation in the Secrets Manager User Guide. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:RotateSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. You also need lambda:InvokeFunction permissions on the rotation function. For more information, see Permissions for rotation.</td>
</tr>
<tr>
    <td><a href="#stop_replication_to_replica"><CopyableCode code="stop_replication_to_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a></td>
    <td></td>
    <td>Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region. You must call this operation from the Region in which you want to promote the replica to a primary secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:StopReplicationToReplica. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
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
    defaultValue="describe_secret"
    values={[
        { label: 'describe_secret', value: 'describe_secret' },
        { label: 'list_secrets', value: 'list_secrets' }
    ]}
>
<TabItem value="describe_secret">

Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager only returns fields that have a value in the response. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:DescribeSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
SELECT
ARN,
CreatedDate,
DeletedDate,
Description,
ExternalSecretRotationMetadata,
ExternalSecretRotationRoleArn,
KmsKeyId,
LastAccessedDate,
LastChangedDate,
LastRotatedDate,
Name,
NextRotationDate,
OwningService,
PrimaryRegion,
ReplicationStatus,
RotationEnabled,
RotationLambdaARN,
RotationRules,
Tags,
Type,
VersionIdsToStages
FROM aws.secretsmanager.secrets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_secrets">

Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console. All Secrets Manager operations are eventually consistent. ListSecrets might not reflect changes from the last five minutes. You can get more recent information for a specific secret by calling DescribeSecret. To list the versions of a secret, use ListSecretVersionIds. To retrieve the values for the secrets, call BatchGetSecretValue or GetSecretValue. For information about finding secrets in the console, see Find secrets in Secrets Manager. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:ListSecrets. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
SELECT
ARN,
CreatedDate,
DeletedDate,
Description,
ExternalSecretRotationMetadata,
ExternalSecretRotationRoleArn,
KmsKeyId,
LastAccessedDate,
LastChangedDate,
LastRotatedDate,
Name,
NextRotationDate,
OwningService,
PrimaryRegion,
RotationEnabled,
RotationLambdaARN,
RotationRules,
SecretVersionsToStages,
Tags,
Type
FROM aws.secretsmanager.secrets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_secret"
    values={[
        { label: 'create_secret', value: 'create_secret' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_secret">

Creates a new secret. A secret can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service, which Secrets Manager doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret. For secrets that use managed rotation, you need to create the secret through the managing service. For more information, see Secrets Manager secrets managed by other Amazon Web Services services. For information about creating a secret in the console, see Create a secret. To create a secret, you can provide the secret value to be encrypted in either the SecretString parameter or the SecretBinary parameter, but not both. If you include SecretString or SecretBinary then Secrets Manager creates an initial secret version and automatically attaches the staging label AWSCURRENT to it. For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the SecretString matches the JSON structure of a database secret. If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key aws/secretsmanager. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use aws/secretsmanager. Creating aws/secretsmanager can result in a one-time significant delay in returning the result. If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use aws/secretsmanager to encrypt the secret, and you must create and use a customer managed KMS key. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary or SecretString because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:CreateSecret. If you include tags in the secret, you also need secretsmanager:TagResource. To add replica Regions, you must also have secretsmanager:ReplicateSecretToRegions. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. To encrypt the secret with a KMS key other than aws/secretsmanager, you need kms:GenerateDataKey and kms:Decrypt permission to the key. When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets.

```sql
INSERT INTO aws.secretsmanager.secrets (
Name,
ClientRequestToken,
Description,
KmsKeyId,
SecretBinary,
SecretString,
Tags,
AddReplicaRegions,
ForceOverwriteReplicaSecret,
Type,
region
)
SELECT 
'{{ Name }}',
'{{ ClientRequestToken }}',
'{{ Description }}',
'{{ KmsKeyId }}',
'{{ SecretBinary }}',
'{{ SecretString }}',
'{{ Tags }}',
'{{ AddReplicaRegions }}',
{{ ForceOverwriteReplicaSecret }},
'{{ Type }}',
'{{ region }}'
RETURNING
ARN,
Name,
ReplicationStatus,
VersionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: secrets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the secrets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the new secret. The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@- Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        If you include SecretString or SecretBinary, then Secrets Manager creates an initial version for the secret, and this parameter specifies the unique identifier for the new version. If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request. If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken and include it in the request. This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a UUID-type value to ensure uniqueness of your versions within the specified secret. If the ClientRequestToken value isn't already associated with a version of the secret then a new version of the secret is created. If a version with this value already exists and the version SecretString and SecretBinary values are the same as those in the request, then the request is ignored. If a version with this value already exists and that version's SecretString and SecretBinary values are different from those in the request, then the request fails because you cannot modify an existing version. Instead, use PutSecretValue to create a new version. This value becomes the VersionId of the new version.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the secret.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by alias/, for example alias/aws/secretsmanager. For more information, see About aliases. To use a KMS key in a different account, use the key ARN or the alias ARN. If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value. If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use aws/secretsmanager to encrypt the secret, and you must create and use a customer managed KMS key.
    - name: SecretBinary
      value: "{{ SecretBinary }}"
      description: |
        The binary data to encrypt and store in the new version of the secret. We recommend that you store your binary data in a file and then pass the contents of the file as a parameter. Either SecretString or SecretBinary must have a value, but not both. This parameter is not available in the Secrets Manager console. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
    - name: SecretString
      value: "{{ SecretString }}"
      description: |
        The text data to encrypt and store in this new version of the secret. We recommend you use a JSON structure of key/value pairs for your secret value. Either SecretString or SecretBinary must have a value, but not both. If you create a secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the SecretString parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that a Lambda rotation function can parse. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.
    - name: Tags
      description: |
        A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example: [{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}] Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc". If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an Access Denied error. For more information, see Control access to secrets using tags and Limit access to identities with tags that match secrets' tags. For information about how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters. If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text. For tag quotas and naming restrictions, see Service quotas for Tagging in the Amazon Web Services General Reference guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AddReplicaRegions
      description: |
        A list of Regions and KMS keys to replicate secrets.
      value:
        - Region: "{{ Region }}"
          KmsKeyId: "{{ KmsKeyId }}"
    - name: ForceOverwriteReplicaSecret
      value: {{ ForceOverwriteReplicaSecret }}
      description: |
        Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten.
    - name: Type
      value: "{{ Type }}"
      description: |
        The exact string that identifies the partner that holds the external secret. For more information, see Using Secrets Manager managed external secrets.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_regions_from_replication"
    values={[
        { label: 'remove_regions_from_replication', value: 'remove_regions_from_replication' },
        { label: 'update_secret_version_stage', value: 'update_secret_version_stage' },
        { label: 'update_secret', value: 'update_secret' }
    ]}
>
<TabItem value="remove_regions_from_replication">

For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:RemoveRegionsFromReplication. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
UPDATE aws.secretsmanager.secrets
SET 
SecretId = '{{ SecretId }}',
RemoveReplicaRegions = '{{ RemoveReplicaRegions }}'
WHERE 
region = '{{ region }}' --required
AND SecretId = '{{ SecretId }}' --required
AND RemoveReplicaRegions = '{{ RemoveReplicaRegions }}' --required
RETURNING
ARN,
ReplicationStatus;
```
</TabItem>
<TabItem value="update_secret_version_stage">

Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process. Each staging label can be attached to only one version at a time. To add a staging label to a version when it is already attached to another version, Secrets Manager first removes it from the other version first and then attaches it to this one. For more information about versions and staging labels, see Concepts: Version. The staging labels that you specify in the VersionStage parameter are added to the existing list of staging labels for the version. You can move the AWSCURRENT staging label to this version by including it in this call. Whenever you move AWSCURRENT, Secrets Manager automatically moves the label AWSPREVIOUS to the version that AWSCURRENT was removed from. If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:UpdateSecretVersionStage. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
UPDATE aws.secretsmanager.secrets
SET 
SecretId = '{{ SecretId }}',
VersionStage = '{{ VersionStage }}',
RemoveFromVersionId = '{{ RemoveFromVersionId }}',
MoveToVersionId = '{{ MoveToVersionId }}'
WHERE 
region = '{{ region }}' --required
AND SecretId = '{{ SecretId }}' --required
AND VersionStage = '{{ VersionStage }}' --required
RETURNING
ARN,
Name;
```
</TabItem>
<TabItem value="update_secret">

Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use PutSecretValue. To change the rotation configuration of a secret, use RotateSecret instead. To change a secret so that it is managed by another service, you need to recreate the secret in that service. See Secrets Manager secrets managed by other Amazon Web Services services. We recommend you avoid calling UpdateSecret at a sustained rate of more than once every 10 minutes. When you call UpdateSecret to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions. If you include SecretString or SecretBinary to create a new secret version, Secrets Manager automatically moves the staging label AWSCURRENT to the new version. Then it attaches the label AWSPREVIOUS to the version that AWSCURRENT was removed from. If you call this operation with a ClientRequestToken that matches an existing version's VersionId, the operation results in an error. You can't modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See UpdateSecretVersionStage. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary or SecretString because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:UpdateSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. If you use a customer managed key, you must also have kms:GenerateDataKey, kms:Encrypt, and kms:Decrypt permissions on the key. If you change the KMS key and you don't have kms:Encrypt permission to the new key, Secrets Manager does not re-encrypt existing secret versions with the new key. For more information, see Secret encryption and decryption. When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets.

```sql
UPDATE aws.secretsmanager.secrets
SET 
SecretId = '{{ SecretId }}',
ClientRequestToken = '{{ ClientRequestToken }}',
Description = '{{ Description }}',
KmsKeyId = '{{ KmsKeyId }}',
SecretBinary = '{{ SecretBinary }}',
SecretString = '{{ SecretString }}',
Type = '{{ Type }}'
WHERE 
region = '{{ region }}' --required
AND SecretId = '{{ SecretId }}' --required
RETURNING
ARN,
Name,
VersionId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_secret"
    values={[
        { label: 'delete_secret', value: 'delete_secret' }
    ]}
>
<TabItem value="delete_secret">

Deletes a secret and all of its versions. You can specify a recovery window during which you can restore the secret. The minimum recovery window is 7 days. The default recovery window is 30 days. Secrets Manager attaches a DeletionDate stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently. You can't delete a primary secret that is replicated to other Regions. You must first delete the replicas using RemoveRegionsFromReplication, and then delete the primary secret. When you delete a replica, it is deleted immediately. You can't directly delete a version of a secret. Instead, you remove all staging labels from the version using UpdateSecretVersionStage. This marks the version as deprecated, and then Secrets Manager can automatically delete the version in the background. To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window. For more information, see Monitor secrets scheduled for deletion. Secrets Manager performs the permanent secret deletion at the end of the waiting period as a background task with low priority. There is no guarantee of a specific time after the recovery window for the permanent delete to occur. At any time before recovery window ends, you can use RestoreSecret to remove the DeletionDate and cancel the deletion of the secret. When a secret is scheduled for deletion, you cannot retrieve the secret value. You must first cancel the deletion with RestoreSecret and then you can retrieve the secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:DeleteSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
DELETE FROM aws.secretsmanager.secrets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_rotate_secret"
    values={[
        { label: 'cancel_rotate_secret', value: 'cancel_rotate_secret' },
        { label: 'replicate_secret_to_regions', value: 'replicate_secret_to_regions' },
        { label: 'restore_secret', value: 'restore_secret' },
        { label: 'rotate_secret', value: 'rotate_secret' },
        { label: 'stop_replication_to_replica', value: 'stop_replication_to_replica' }
    ]}
>
<TabItem value="cancel_rotate_secret">

Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation. If you cancel a rotation in progress, it can leave the VersionStage labels in an unexpected state. You might need to remove the staging label AWSPENDING from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label AWSCURRENT to the version that has AWSPENDING. To determine which version has a specific staging label, call ListSecretVersionIds. Then use UpdateSecretVersionStage to change staging labels. For more information, see How rotation works. To turn on automatic rotation again, call RotateSecret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:CancelRotateSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
EXEC aws.secretsmanager.secrets.cancel_rotate_secret 
@region='{{ region }}' --required 
@@json=
'{
"SecretId": "{{ SecretId }}"
}'
;
```
</TabItem>
<TabItem value="replicate_secret_to_regions">

Replicates the secret to a new Regions. See Multi-Region secrets. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:ReplicateSecretToRegions. If the primary secret is encrypted with a KMS key other than aws/secretsmanager, you also need kms:Decrypt permission to the key. To encrypt the replicated secret with a KMS key other than aws/secretsmanager, you need kms:GenerateDataKey and kms:Encrypt to the key. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
EXEC aws.secretsmanager.secrets.replicate_secret_to_regions 
@region='{{ region }}' --required 
@@json=
'{
"SecretId": "{{ SecretId }}", 
"AddReplicaRegions": "{{ AddReplicaRegions }}", 
"ForceOverwriteReplicaSecret": {{ ForceOverwriteReplicaSecret }}
}'
;
```
</TabItem>
<TabItem value="restore_secret">

Cancels the scheduled deletion of a secret by removing the DeletedDate time stamp. You can access a secret again after it has been restored. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:RestoreSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
EXEC aws.secretsmanager.secrets.restore_secret 
@region='{{ region }}' --required 
@@json=
'{
"SecretId": "{{ SecretId }}"
}'
;
```
</TabItem>
<TabItem value="rotate_secret">

Configures and starts the asynchronous process of rotating the secret. For information about rotation, see Rotate secrets in the Secrets Manager User Guide. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret. When rotation is successful, the AWSPENDING staging label might be attached to the same version as the AWSCURRENT version, or it might not be attached to any version. If the AWSPENDING staging label is present but not attached to the same version as AWSCURRENT, then any later invocation of RotateSecret assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the AWSPENDING staging label might be attached to an empty secret version. For more information, see Troubleshoot rotation in the Secrets Manager User Guide. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:RotateSecret. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. You also need lambda:InvokeFunction permissions on the rotation function. For more information, see Permissions for rotation.

```sql
EXEC aws.secretsmanager.secrets.rotate_secret 
@region='{{ region }}' --required 
@@json=
'{
"SecretId": "{{ SecretId }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"RotationLambdaARN": "{{ RotationLambdaARN }}", 
"RotationRules": "{{ RotationRules }}", 
"ExternalSecretRotationMetadata": "{{ ExternalSecretRotationMetadata }}", 
"ExternalSecretRotationRoleArn": "{{ ExternalSecretRotationRoleArn }}", 
"RotateImmediately": {{ RotateImmediately }}
}'
;
```
</TabItem>
<TabItem value="stop_replication_to_replica">

Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region. You must call this operation from the Region in which you want to promote the replica to a primary secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:StopReplicationToReplica. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
EXEC aws.secretsmanager.secrets.stop_replication_to_replica 
@region='{{ region }}' --required 
@@json=
'{
"SecretId": "{{ SecretId }}"
}'
;
```
</TabItem>
</Tabs>
